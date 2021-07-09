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
}

export class LocalStorage {
  public static uiLanguage = new LocalStorageItem(LocalStorageKey.UILanguage);
}
