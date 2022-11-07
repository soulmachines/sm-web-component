import { test, expect, Page } from '@playwright/test';
import { connectToScene } from './commands';

test.describe('connecting to a scene', () => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    // Setup a shared page for tests to run against
    page = await browser.newPage();

    await page.goto('/');
    await connectToScene(page);
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('it does not render a profile picture', async ({ page }) => {
    // Verify we are not showing a custom profile image or the default profile image
    await expect(page.getByAltText('Digital person')).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Digital person' })).toHaveCount(0);
  });

  test('it renders a enable microphone button and then renders a disable microphone button once clicked', async ({
    page,
  }) => {
    await page.getByRole('button', { name: 'Enable microphone' }).click();

    await expect(page.getByRole('button', { name: 'Enable microphone' })).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Disable microphone' })).toHaveCount(1);

    await page.getByRole('button', { name: 'Disable microphone' }).click();

    await expect(page.getByRole('button', { name: 'Disable microphone' })).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Enable microphone' })).toHaveCount(1);
  });
});
