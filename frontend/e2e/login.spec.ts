import { test, expect } from '@playwright/test'

test.describe('Login flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login')
    await page.context().clearCookies()
    await page.evaluate(() => localStorage.clear())
  })

test('User can log in with valid credentials', async ({ page }) => {
  await page.goto('/login')
  console.log('Page loaded.')

  await page.getByLabel('Email').fill('test@test.com')
  await page.getByLabel('Password').fill('test123')
  console.log('Credentials filled.')

  await page.getByRole('button', { name: /log in/i }).click()
  console.log('Login button clicked.')

  // This might be hanging
  await expect(page).toHaveURL(/\/profile$/, { timeout: 5000 })

  const token = await page.evaluate(() => localStorage.getItem('token'))
  console.log('Token:', token)

  expect(token).toBeTruthy()
})


  test('Shows error on invalid credentials', async ({ page }) => {
    await page.getByLabel('Email').fill('wrong@test.com')
    await page.getByLabel('Password').fill('invalidpassword')
    await page.getByRole('button', { name: /log in/i }).click()

    await expect(page.getByText(/invalid email or password/i)).toBeVisible()
  })
})
