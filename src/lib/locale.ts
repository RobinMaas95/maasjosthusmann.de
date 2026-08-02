import { writable } from 'svelte/store';

export type Language = 'en' | 'de';

export const language = writable<Language>('en');

export function initialLanguage(stored: string | null, languages: readonly string[]): Language {
	if (stored === 'de' || stored === 'en') return stored;
	return languages.some((value) => value.toLowerCase().startsWith('de')) ? 'de' : 'en';
}
