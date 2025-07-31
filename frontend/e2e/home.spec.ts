import { test, expect } from "playwright/test"

test("Home page", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/")
})