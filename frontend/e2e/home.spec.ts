import { test, expect } from "playwright/test"

test("Home page", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");
  await expect(page.getByTestId("nav-sign-in")).toHaveText("Sign in");
  await expect(page).toHaveTitle("Practice Software Testing - Toolshop - v5.0");

})