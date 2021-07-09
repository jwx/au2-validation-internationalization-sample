import { I18N } from '@aurelia/i18n';
import { newInstanceForScope } from '@aurelia/kernel';
import { IValidationRules } from '@aurelia/validation';
import { IValidationController } from '@aurelia/validation-html';
import { inject } from 'aurelia';
import { Person } from 'resources/models/person';

@inject()
export class View2 {
  public person: Person;
  public message: string;

  constructor(@newInstanceForScope(IValidationController) private validationController: IValidationController,
              @IValidationRules validationRules: IValidationRules,
              @I18N public i18N: I18N) {
    this.person = new Person(undefined, undefined, undefined);

    validationRules
      .on(this.person)

      // doesn't work
      .ensure((x: Person) => x.address)
      .required()
      .minLength(10).withMessageKey('minLength');
  }

  public async submit() {
    this.message = '';
    const result = await this.validationController.validate();
    if (!result.valid) return;

    this.message = 'validation passed';
    console.log(result);
  }

}
