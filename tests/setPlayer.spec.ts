import { test, expect } from '@playwright/test'
import { baseUrl, playerNameUrl, stageHubUrl } from './urlRoutes'

test('App has a button to start the game and directs to "player-name" route', async ({
  page
}) => {
  await page.goto(baseUrl)
  const button = page.getByTestId('start-game')
  await expect(button).toBeVisible()
  button.click()
  await page.waitForURL(playerNameUrl)
})

test('App has a form and button to submit the player name', async ({
  page
}) => {
  await page.goto(playerNameUrl)
  await page.getByLabel('PLAYER NAME').click()
  await page.getByLabel('PLAYER NAME').fill('Test User')
  await page.getByRole('button', { name: 'SUBMIT' }).click()
  await page.waitForURL(stageHubUrl)
  expect(page.url()).toBe(stageHubUrl)
})

test('validates player name input if empty and prevents starting the game', async ({
  page
}) => {
  await page.goto('http://localhost:3000/game/player-name')
  await page.getByRole('button', { name: 'SUBMIT' }).click()
  expect(page.url()).toBe(playerNameUrl)
})
