import { expect, test } from '@playwright/test';

test('renders the English blog index and article', async ({ page }) => {
	await page.goto('/blog/');

	await expect(page).toHaveTitle('Blog · Robin Maasjosthusmann');
	await expect(page.getByRole('heading', { name: 'What I found. What I changed.' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Why I Switched to the MoErgo Glove80 Keyboard' })).toHaveAttribute('href', '/blog/glove80/');

	await page.getByRole('link', { name: 'Why I Switched to the MoErgo Glove80 Keyboard' }).click();
	await expect(page).toHaveURL(/\/blog\/glove80\/$/);
	await expect(page.getByRole('heading', { name: 'Why I Switched to the MoErgo Glove80 Keyboard' })).toBeVisible();
	await expect(page.getByText('The keyboard that made typing more comfortable also made me significantly slower.')).toBeVisible();

	await page.getByRole('link', { name: 'Back to blog' }).click();
	await expect(page).toHaveURL(/\/blog\/$/);
});
