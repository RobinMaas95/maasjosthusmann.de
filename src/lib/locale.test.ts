import { expect, test } from 'vitest';

import { initialLanguage } from './locale';

test('uses a persisted valid language over browser preferences', () => {
	expect(initialLanguage('en', ['de-DE'])).toBe('en');
});

test('defaults German browser preferences to German', () => {
	expect(initialLanguage(null, ['de-DE', 'en-GB'])).toBe('de');
});

test('defaults other browser preferences to English', () => {
	expect(initialLanguage(null, ['en-GB'])).toBe('en');
});
