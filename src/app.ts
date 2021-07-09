import { inject, route } from 'aurelia';
import { LocaleService } from 'resources/services/locale-service';

export enum MainRoutesEnum {
  Home = 'home',
  Alternative = 'alternative'
}

@route({
  routes: [
    {
      id: MainRoutesEnum.Home,
      path: ['', MainRoutesEnum.Home],
      component: import('app/home/home'),
      title: 'Home'
    },
    {
      id: MainRoutesEnum.Alternative,
      path: MainRoutesEnum.Alternative,
      component: import('app/alternative/alternative'),
      title: 'Alternative'
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
