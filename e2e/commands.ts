import { expect, Page } from '@playwright/test';

export async function connectToScene(page: Page) {
  await page.getByRole('button', { name: 'Digital person' }).click();

  // Verify progress bar appears and is removed
  await expect(page.locator('[role="progressbar"]')).toBeVisible();
  await expect(page.locator('[role="progressbar"]')).toBeHidden({ timeout: 50000 });

  // Verify disconnect button is rendered
  return await expect(page.getByRole('button', { name: 'Disconnect video' })).toHaveCount(1);
}
