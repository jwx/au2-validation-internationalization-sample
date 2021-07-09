import { I18N } from '@aurelia/i18n';
import { newInstanceForScope } from '@aurelia/kernel';
import { IValidationRules } from '@aurelia/validation';
import { IValidationController } from '@aurelia/validation-html';
import { inject } from 'aurelia';
import { Person } from 'resources/models/person';

@inject()
export class View1 {
  public person: Person;
  public message: string;

  constructor(@newInstanceForScope(IValidationController) private validationController: IValidationController,
              @IValidationRules validationRules: IValidationRules,
              @I18N public i18N: I18N) {
    this.person = new Person(undefined, undefined, undefined);

    validationRules
      .on(this.person)

      // does work, but requires to reload the page on language changed
      .ensure((x: Person) => x.name)
      .required().withMessage(i18N.tr('required'))
  }

  public async submit() {
    this.message = '';
    const result = await this.validationController.validate();
    if (!result.valid) return;

    this.message = 'validation passed';
    console.log(result);
  }
}
