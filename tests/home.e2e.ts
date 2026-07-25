import { expect, test } from '@playwright/test';

test('renders the portfolio and persists a language choice', async ({ page }) => {
	await page.goto('/');

	await expect(page).toHaveTitle(/Robin Maasjosthusmann/);
	await expect(page.getByRole('heading', { name: 'Platform & AI Engineer' })).toBeVisible();
	await expect(page.getByRole('link', { name: /Start a Conversation/ }).first()).toHaveAttribute('href', 'mailto:hello@maasjosthusmann.de');

	await page.getByRole('button', { name: 'DE' }).click();
	await expect(page.getByRole('heading', { name: 'Plattform- & AI-Engineer' })).toBeVisible();
	await page.reload();
	await expect(page.getByRole('heading', { name: 'Plattform- & AI-Engineer' })).toBeVisible();
});
