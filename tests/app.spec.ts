import { test, expect } from '@playwright/test'
import { baseUrl, playerNameUrl, stageHubUrl } from './urlRoutes'

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

test('navigate back to index on logo click', async ({ page }) => {
  await page.goto(playerNameUrl)
  await page.getByRole('heading', { name: 'Super Kung Vue' }).click()
  await page.waitForURL(baseUrl)
  expect(page.url()).toBe(baseUrl)
})

test('reset game', async ({ page }) => {
  await page.goto(baseUrl)
  const startGameBtn = page.getByTestId('start-game')
  await startGameBtn.click()
  await page.getByLabel('PLAYER NAME').click()
  await page.getByLabel('PLAYER NAME').fill('Test User')
  await page.getByRole('button', { name: 'SUBMIT' }).click()
  await page.getByRole('button', { name: 'Reset Game' }).click()
  await page.getByRole('button', { name: "Nah, I'm Good" }).click()
  await page.waitForURL(baseUrl)
  expect(page.url()).toBe(baseUrl)
  await expect(startGameBtn).toBeVisible()
})

test('try again', async ({ page }) => {
  await page.goto(baseUrl)
  const startGameBtn = page.getByTestId('start-game')
  await startGameBtn.click()
  await page.getByLabel('PLAYER NAME').click()
  await page.getByLabel('PLAYER NAME').fill('Test User')
  await page.getByRole('button', { name: 'SUBMIT' }).click()
  await page.getByRole('button', { name: 'Reset Game' }).click()
  await page.getByRole('button', { name: 'Try Again' }).click()
  await page.waitForURL(stageHubUrl)
  expect(page.url()).toBe(stageHubUrl)
})

test('dark mode toggle', async ({ page }) => {
  await page.goto(baseUrl)
  const darkModeToggle = await page.getByTestId('color-mode-toggle')
  await darkModeToggle.click()
  expect(await page.getAttribute('html', 'class')).toBe('dark')
  await darkModeToggle.click()
  expect(await page.getAttribute('html', 'class')).toBe('light')
})
