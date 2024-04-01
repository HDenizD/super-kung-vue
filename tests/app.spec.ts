import { test, expect } from '@playwright/test'

const baseUrl = 'http://localhost:3000'
const playerNameUrl = 'http://localhost:3000/game/player-name'

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

// test('App has a button to start the game and directs to "player-name" route', async ({
//   page
// }) => {
//   await page.goto(baseUrl)
//   const button = page.getByTestId('start-game')
//   expect(button).toBeVisible()
//   button.click()
//   await page.waitForURL(playerNameUrl)
// })

// test('App has a form to enter player name', async ({ page }) => {
//   await page.goto(playerNameUrl)

//   const form = await page.$('form')
//   expect(form).not.toBe(null)
// })
