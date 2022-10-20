import { test, expect } from '@playwright/test';

// test to connect to the example site used by Cypress. Needs to be running in order to work.
test('connect to the digital person and enable microphone and video', async ({ page }) => {
  // go to the example site
  await page.goto('http://localhost:5050');

  // launch the digital person widget
  await page.getByRole('button', { name: 'Digital person' }).click();

  //enable the microphone
  await page.getByRole('button', { name: 'Enable microphone' }).click();
});

// connect to the digital person on square space
test('connect to the digital person on square space', async ({ page }) => {
  // go to the example site
  await page.goto('https://scarlet-cyan-a8wp.squarespace.com');

  // launch the digital person widget
  await page.getByRole('button', { name: 'Digital person' }).click();
});
