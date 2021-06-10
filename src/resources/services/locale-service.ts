import { I18N } from '@aurelia/i18n';
import { inject } from 'aurelia';
import { LocalStorage } from 'resources/utils/local-storage';

@inject()
export class LocaleService {
  constructor(@I18N private i18N: I18N) {
  }

  public async init() {
    let currentLang = LocalStorage.uiLanguage.get();
    if (!currentLang) {
      currentLang = 'en';
      LocalStorage.uiLanguage.set(currentLang);
    }
    await this.i18N.setLocale(currentLang);
  }

  public async set(lng) {
    LocalStorage.uiLanguage.set(lng);
    await this.i18N.setLocale(lng);
  }
}
