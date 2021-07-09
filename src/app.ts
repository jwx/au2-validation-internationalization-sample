import { inject, route } from 'aurelia';
import { LocaleService } from 'resources/services/locale-service';

export enum MainRoutesEnum {
  Home = 'home'
}

@route({
  routes: [
    {
      id: MainRoutesEnum.Home,
      path: ['',MainRoutesEnum.Home],
      component: import('app/home/home'),
      title: 'Home'
    }
  ]
})
@inject()
export class App {
  constructor(private localeService: LocaleService) {
  }

  public async binding() {
    await this.localeService.init();
  }
}
