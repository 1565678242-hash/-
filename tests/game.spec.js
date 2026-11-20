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
  await expect(page.locator('#gameCanvas')).toBeAttached();
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

test('live-room props are ordered from lowest lucky-fruit cost to highest', async ({ page }) => {
  await page.locator('#btnShopHome').click();
  const prices = await page.locator('#shopGrid .shop-buy').allTextContents();
  const costs = prices.map(text => Number.parseInt(text, 10));
  expect(costs.length).toBeGreaterThan(0);
  expect(costs[0]).toBe(7);
  expect(costs).toEqual([...costs].sort((a, b) => a - b));
});


test('live HUD keeps all six tiles and chat notices align to the bottom right', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page.locator('#hud > *')).toHaveCount(6);
  await expect(page.locator('#hudDayChip')).toBeAttached();

  const layout = await page.evaluate(() => {
    const layer = document.querySelector('#danmuLayer');
    const bubble = document.createElement('div');
    bubble.className = 'danmu-float';
    layer.appendChild(bubble);
    const toast = document.createElement('div');
    toast.className = 'entry-toast';
    document.body.appendChild(toast);
    const layerStyle = getComputedStyle(layer);
    const bubbleStyle = getComputedStyle(bubble);
    const toastStyle = getComputedStyle(toast);
    const result = {
      dayChipDisplay: getComputedStyle(document.querySelector('#hudDayChip')).display,
      layerRight: layerStyle.right,
      bubbleRight: bubbleStyle.right,
      bubbleTextAlign: bubbleStyle.textAlign,
      toastRight: toastStyle.right,
      toastTextAlign: toastStyle.textAlign
    };
    bubble.remove();
    toast.remove();
    return result;
  });

  expect(layout.dayChipDisplay).not.toBe('none');
  expect(layout.layerRight).toBe('10px');
  expect(layout.bubbleRight).toBe('0px');
  expect(layout.bubbleTextAlign).toBe('right');
  expect(layout.toastRight).toBe('10px');
  expect(layout.toastTextAlign).toBe('right');
});


test('importing a day-20 save preserves the day and in-progress snapshot', async ({ page }) => {
  const day20Save = {
    totalHeat: 3551,
    totalFans: 614,
    totalPopped: 112,
    totalDays: 19,
    bestDay: 19,
    unlocked: ['xi', 'li', 'sang'],
    luckyCount: 11,
    currentDay: 20,
    money: 3897,
    totalEarned: 6677,
    garden: {
      seeds: 4,
      plots: [{ seedKind: 'normal', flowerId: 'echinacea', stage: 2, revealed: true }],
      unlockedPlots: 8,
      flowers: 56,
      harvestCount: 30,
      totalFlowers: 88,
      totalPlanted: 31,
      flowerCollection: ['echinacea']
    },
    daySnapshot: {
      day: 20,
      heat: 140,
      fans: 614,
      dayStats: { popped: 1, fansGained: 39, heatPeak: 140, answered: 0 },
      combo: 0,
      comboTimer: 0,
      pairKey: 'cao',
      hasFruit: true,
      fruitCollected: true,
      buffs: {},
      bubbles: [{
        type: 'negative', word: '委屈', r: 33, x: 120, y: 240,
        vx: 1, vy: 1, entering: false, enterT: 0, enterDelay: 0, targetY: 240
      }],
      specials: [],
      specialTimer: 1.5,
      blend: 0
    }
  };

  await page.locator('#btnSaveHome').click();
  await page.locator('#btnSaveManageImport').click();
  const dialogMessages = [];
  page.on('dialog', dialog => {
    dialogMessages.push(dialog.message());
    dialog.accept();
  });
  const reloaded = page.waitForNavigation({ waitUntil: 'domcontentloaded' });
  await page.locator('#saveFileInput').setInputFiles({
    name: 'day-20-save.json',
    mimeType: 'application/json',
    buffer: Buffer.from(JSON.stringify(day20Save))
  });
  await reloaded;
  expect(dialogMessages.join(' | ')).toContain('存档导入成功');
  await expect.poll(async () => page.evaluate(key => {
    const saved = JSON.parse(localStorage.getItem(key) || '{}');
    return Number(saved.currentDay || 0);
  }, SAVE_KEY)).toBe(20);
  await expect(page.locator('#btnContinue')).toContainText('第 20 天');
  await page.locator('#btnContinue').click();
  await expect(page.locator('#hudDay')).toHaveText('20');
  await expect(page.locator('#hudHeat')).toHaveText('140');
  await expect(page.locator('#hudFans')).toHaveText('614');
});

test('invalid save import leaves the existing local save untouched', async ({ page }) => {
  const original = { totalDays: 6, currentDay: 7, totalFans: 123 };
  await page.evaluate(([key, value]) => localStorage.setItem(key, JSON.stringify(value)), [SAVE_KEY, original]);
  await page.locator('#btnSaveHome').click();
  await page.locator('#btnSaveManageImport').click();
  page.on('dialog', dialog => dialog.accept());
  await page.locator('#saveFileInput').setInputFiles({
    name: 'invalid-save.json',
    mimeType: 'application/json',
    buffer: Buffer.from(JSON.stringify({ currentDay: 'not-a-day', totalDays: 3 }))
  });
  const stored = await page.evaluate(key => JSON.parse(localStorage.getItem(key)), SAVE_KEY);
  expect(stored).toEqual(original);
});
