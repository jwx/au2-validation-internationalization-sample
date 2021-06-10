class LocalStorageItem {
  private keySuffix: string;

  constructor(private key: LocalStorageKey, data: string = null) {
    this.keySuffix = data ? `_${data}` : '';
  }

  public get() {
    return localStorage.getItem(`${this.key}${this.keySuffix}`);
  }

  public set(val: any) {
    localStorage.setItem(`${this.key}${this.keySuffix}`, val);
  }

  public remove() {
    localStorage.removeItem(`${this.key}${this.keySuffix}`);
  }
}

enum LocalStorageKey {
  UILanguage = 'ui-language',
  Token = 'ft-token',
}

export class LocalStorage {
  public static uiLanguage = new LocalStorageItem(LocalStorageKey.UILanguage);
  public static token = new LocalStorageItem(LocalStorageKey.Token);
}
