import { inject, IObserverLocator, route } from 'aurelia';
import { LocaleService } from 'resources/services/locale-service';

export enum MainRoutesEnum {
  SignIn = 'login'
}

@route({
  routes: [
    {
      id: MainRoutesEnum.SignIn,
      path: ['',MainRoutesEnum.SignIn],
      component: import('app/login/login'),
      title: 'Sign in'
    }
  ]
})
@inject()
export class App {
  constructor(@IObserverLocator public ol: IObserverLocator,
              private localeService: LocaleService) {
  }

  public async binding() {
    await this.localeService.init();
  }
}
