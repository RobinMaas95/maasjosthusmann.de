import { describe, expect, it } from 'vitest';

import { defaultLanguage, languageStorageKey, storedLanguage } from './language';

describe('language selection', () => {
  it('defaults German browser preferences to German', () => {
    expect(defaultLanguage(['de-DE', 'en-US'])).toBe('de');
  });

  it('defaults non-German browser preferences to English', () => {
    expect(defaultLanguage(['en-GB', 'de-DE'])).toBe('en');
  });

  it('returns the visitor-selected language from storage', () => {
    const values: Record<string, string> = { [languageStorageKey]: 'de' };

    expect(storedLanguage({ getItem: (key) => values[key] ?? null })).toBe('de');
  });
});
