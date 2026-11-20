import { test, expect } from '@playwright/test';

const SAVE_KEY = 'bad_emotion_live_v7';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#homeScreen')).toHaveClass(/active/);
  const skipStory = page.locator('#tutSkip');
  if (await skipStory.isVisible().catch(() => false)) await skipStory.click();
});

test('game boots without uncaught JavaScript errors', async ({ page }) => {
  const pageErrors = [];
  page.on('pageerror', error => pageErrors.push(error.message));
  await page.reload();
  await expect(page.locator('#homeScreen')).toHaveClass(/active/);
  await expect(page.locator('#gameCanvas')).toBeVisible();
  expect(pageErrors).toEqual([]);
});

test('new player guide opens and closes', async ({ page }) => {
  await page.locator('#btnGameGuide').click();
  await expect(page.locator('#gameGuide')).toHaveClass(/show/);
  await page.locator('#btnGuideClose').click();
  await expect(page.locator('#gameGuide')).not.toHaveClass(/show/);
});

test('save management opens and reset can be cancelled safely', async ({ page }) => {
  await page.locator('#btnSaveHome').click();
  await expect(page.locator('#saveManageMenu')).toHaveClass(/show/);
  await page.locator('#btnSaveManageReset').click();
  await expect(page.locator('#resetConfirmOverlay')).toHaveClass(/show/);
  await page.locator('#btnResetCancel').click();
  await expect(page.locator('#resetConfirmOverlay')).not.toHaveClass(/show/);
  await expect(page.locator('#saveManageMenu')).toHaveClass(/show/);
});

test('confirming reset clears saved progress and returns to home', async ({ page }) => {
  await page.evaluate(key => {
    localStorage.setItem(key, JSON.stringify({
      totalDays: 8, currentDay: 8, totalPopped: 120,
      totalHeat: 500, totalFans: 80, money: 99, totalEarned: 199,
      unlocked: [], unlockedAchievements: [],
      garden: { seeds: 10, plots: [], fertilizer: 0 }
    }));
  }, SAVE_KEY);

  await page.reload();
  if (await page.locator('#tutSkip').isVisible().catch(() => false)) await page.locator('#tutSkip').click();
  await page.locator('#btnSaveHome').click();
  await page.locator('#btnSaveManageReset').click();
  await page.locator('#btnResetConfirm').click();

  await expect(page.locator('#homeScreen')).toHaveClass(/active/);
  await expect(page.locator('#resetConfirmOverlay')).not.toHaveClass(/show/);
  const saved = await page.evaluate(key => JSON.parse(localStorage.getItem(key)), SAVE_KEY);
  expect(saved.totalDays).toBe(0);
  expect(saved.totalPopped).toBe(0);
  expect(saved.money).toBe(0);
});
