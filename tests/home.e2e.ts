import { expect, test } from '@playwright/test';

test('renders the portfolio and persists a language choice', async ({ page }) => {
	await page.goto('/');

	await expect(page).toHaveTitle(/Robin Maasjosthusmann/);
	await expect(page.getByRole('heading', { name: 'Platform & AI Engineer' })).toBeVisible();
	await expect(page.getByRole('link', { name: /Start a Conversation/ }).first()).toHaveAttribute('href', 'mailto:hello@maasjosthusmann.de');
	await expect(page.getByRole('link', { name: 'Imprint' })).toHaveAttribute('href', '/impressum/');
	await expect(page.getByRole('link', { name: 'Privacy' })).toHaveAttribute('href', '/privacy/');

	await page.getByRole('button', { name: 'DE' }).click();
	await expect(page.getByRole('heading', { name: 'Plattform- & AI-Engineer' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Impressum' })).toHaveAttribute('href', '/impressum/');
	await expect(page.getByRole('link', { name: 'Datenschutz' })).toHaveAttribute('href', '/privacy/');
	await page.reload();
	await expect(page.getByRole('heading', { name: 'Plattform- & AI-Engineer' })).toBeVisible();
});
