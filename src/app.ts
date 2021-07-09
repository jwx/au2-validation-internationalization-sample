import { inject } from 'aurelia';
import { LocaleService } from 'resources/services/locale-service';

@inject()
export class App {
  constructor(private localeService: LocaleService) {
  }

  public async binding() {
    await this.localeService.init();
  }
}
