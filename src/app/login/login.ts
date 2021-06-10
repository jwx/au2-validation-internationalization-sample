import { I18N } from '@aurelia/i18n';
import { newInstanceForScope } from '@aurelia/kernel';
import { IValidationRules } from '@aurelia/validation';
import { IValidationController } from '@aurelia/validation-html';
import { inject, IRouteViewModel } from 'aurelia';
import { LocaleService } from 'resources/services/locale-service';

class Person {
  public constructor(
    public name: string,
    public age: number,
    public address: string,
  ) {
  }
}

@inject()
export class Login implements IRouteViewModel {
  public person: Person;

  constructor(@newInstanceForScope(IValidationController) private validationController: IValidationController,
              @IValidationRules validationRules: IValidationRules,
              @I18N public i18N: I18N,
              private localeService: LocaleService) {
    this.person = new Person(undefined, undefined, undefined);

    validationRules
      .on(this.person)

      // does work, but requires to reload the page on language changed
      .ensure((x: Person) => x.name)
      .required().withMessage(i18N.tr('required'))

      // doesn't work
      .ensure((x: Person) => x.address)
      .required()
      .minLength(10).withMessageKey('minLength');
  }

  public async login() {
    const result = await this.validationController.validate();
    if (!result.valid) return;

    console.log(result);
  }

  public changeLocale(locale: string) {
    this.localeService.set(locale);
  }

}
