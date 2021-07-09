import { inject, IRouteViewModel } from 'aurelia';
import { LocaleService } from 'resources/services/locale-service';


@inject()
export class Home implements IRouteViewModel {
  public showView1 = true;

  constructor(private localeService: LocaleService) {
  }

  public changeLocale(locale: string) {
    this.localeService.set(locale);
  }

  public setView1() {
    this.showView1 = true;
  }

  public setView2() {
    this.showView1 = false;
  }
}
