import { inject } from 'aurelia';
import { LocaleService } from 'resources/services/locale-service';


@inject()
export class RouteWrap {

  constructor(private localeService: LocaleService) {
  }

  public changeLocale(locale: string) {
    this.localeService.set(locale);
  }
}
