import './main.scss';
// @ts-ignore
import enVal from '../locales/en-validation.json'
// @ts-ignore
import ruVal from '../locales/ru-validation.json'
import { I18nConfiguration } from '@aurelia/i18n';
import { ValidationTrigger } from '@aurelia/validation-html';
import { ValidationI18nConfiguration } from '@aurelia/validation-i18n';
import { App } from 'app';
import Aurelia, { RouterConfiguration } from 'aurelia';

Aurelia
  .register(RouterConfiguration)
  .register(
    I18nConfiguration.customize(options => {
      options.initOptions = {
        resources: {
          en: { translation: enVal },
          ru: { translation: ruVal }
        },
        fallbackLng: false
      };
    }),
    ValidationI18nConfiguration.customize(options => {
      options.DefaultTrigger = ValidationTrigger.changeOrFocusout;
      options.DefaultNamespace = 'translation';
    })
  )
  .register()
  .app(App)
  .start();
