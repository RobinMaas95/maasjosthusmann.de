export const languageStorageKey = 'preferred-language';

export type Language = 'de' | 'en';

export function defaultLanguage(languages: readonly string[]): Language {
  return languages[0]?.toLowerCase().startsWith('de') ? 'de' : 'en';
}

export function storedLanguage(storage: Pick<Storage, 'getItem'>): Language | null {
  const value = storage.getItem(languageStorageKey);

  return value === 'de' || value === 'en' ? value : null;
}
