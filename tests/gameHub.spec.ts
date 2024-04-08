import { test, expect } from '@playwright/test'
import { baseUrl, stage1Url, stageHubUrl } from './urlRoutes'

test('play stage 1', async ({ page }) => {
  await page.goto(baseUrl)
  await page.getByTestId('start-game').click()
  await page.getByLabel('PLAYER NAME').click()
  await page.getByLabel('PLAYER NAME').fill('Test User')
  await page.getByRole('button', { name: 'SUBMIT' }).click()
  await page.getByRole('heading', { name: 'Stage 1', exact: true }).click()
  await page.waitForURL(stage1Url)
  expect(page.url()).toBe(stage1Url)
})

test('play stage 1 and go back to stageHub', async ({ page }) => {
  await page.goto(baseUrl)
  await page.getByTestId('start-game').click()
  await page.getByLabel('PLAYER NAME').click()
  await page.getByLabel('PLAYER NAME').fill('Test User')
  await page.getByRole('button', { name: 'SUBMIT' }).click()
  await page.getByRole('heading', { name: 'Stage 1', exact: true }).click()
  await page.waitForURL(stage1Url)
  expect(page.url()).toBe(stage1Url)
  await page.getByTestId('option-button').first().click()
  await page.getByRole('button', { name: 'Submit Answer' }).click()
  await page.waitForURL(stageHubUrl)
  expect(page.url()).toBe(stageHubUrl)
})
