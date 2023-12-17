import { test, expect } from '@playwright/test';


test('Authenticate', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Click the get started link.
  await page.getByTestId('login-button').click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Welcome' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Continue', exact: true })).toBeVisible();
  await page.locator("[name='username']").fill("a@a.com")
  await page.locator("[name='password']").fill("Pozo1234*")
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Star wars films' })).toBeVisible();
});
