import { test, expect } from '@playwright/test'
import { baseUrl } from './urlRoutes'

test('App is running and page title says "Super Kung Vue"', async ({
  page
}) => {
  await page.goto(baseUrl)

  const title = await page.title()
  expect(title).toBe('Super Kung Vue - Quiz Game')
})

test('App has a favicon', async ({ page }) => {
  await page.goto(baseUrl)

  const favicon = await page.$('link[rel="icon"]')
  expect(favicon).not.toBe(null)
})

test('App has a heading', async ({ page }) => {
  await page.goto(baseUrl)

  const heading = await page.innerHTML('h1')
  expect(heading).toBe(' Super <br> Kung Vue ')
})
