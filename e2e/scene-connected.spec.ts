import { test, expect } from '@playwright/test';
import { connectToScene } from './commands';

test.describe('connecting to a scene', () => {
  test('it does not render a profile picture', async ({ page }) => {
    await page.goto('/');
    await connectToScene(page);

    // Verify we are not showing a custom profile image or the default profile image
    await expect(page.getByAltText('Digital person')).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Digital person' })).toHaveCount(0);
  });

  test('it renders a enable microphone button and then renders a disable microphone button once clicked', async ({
    page,
  }) => {
    await page.goto('/');
    await connectToScene(page);

    await page.getByRole('button', { name: 'Enable microphone' }).click();

    await expect(page.getByRole('button', { name: 'Enable microphone' })).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Disable microphone' })).toHaveCount(1);

    await page.getByRole('button', { name: 'Disable microphone' }).click();

    await expect(page.getByRole('button', { name: 'Disable microphone' })).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Enable microphone' })).toHaveCount(1);
  });

  test('it renders a enable camera button and then renders a disable camera button once clicked', async ({
    page,
  }) => {
    await page.goto('/');
    await connectToScene(page);

    await page.getByRole('button', { name: 'Enable camera' }).click();

    await expect(page.getByRole('button', { name: 'Enable camera' })).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Disable camera' })).toHaveCount(1);

    await page.getByRole('button', { name: 'Disable camera' }).click();

    await expect(page.getByRole('button', { name: 'Disable camera' })).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Enable camera' })).toHaveCount(1);
  });

  test('renders a mute button and then renders a unmute video button once clicked', async ({
    page,
  }) => {
    await page.goto('/');
    await connectToScene(page);

    await page.getByRole('button', { name: 'Mute video' }).click();

    await expect(page.getByRole('button', { name: 'Mute video' })).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Unmute video' })).toHaveCount(1);

    await page.getByRole('button', { name: 'Unmute video' }).click();

    await expect(page.getByRole('button', { name: 'Unmute video' })).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Mute video' })).toHaveCount(1);
  });

  test.only('pauses the video when the tab loses focus and plays it when it gets focus', async ({
    page,
  }) => {
    // TODO:
    // - how to access video element and verify its playing or paused
    // - how to trigger tab focus. Either via dispatching an event or opening a new browser/tab and going back
  });
});

test.describe('reconnecting', () => {
  test('it can reconnect once disconnected', async ({ page }) => {
    await page.goto('/');

    // Connect
    await connectToScene(page);

    // Disconnect
    await page.getByRole('button', { name: 'Disconnect video' }).click();
    await expect(page.getByRole('button', { name: 'Disconnect video' })).toHaveCount(0);

    // Reconnect
    await connectToScene(page);
  });
});
