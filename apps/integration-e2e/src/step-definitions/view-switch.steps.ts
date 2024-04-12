import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/custom-world';

// 300ms is the time the animation is set up to use but we need some extra time
const switchAnimationTime = 1700;

Given('the viewer is in dashboard view', async function (this: CustomWorld) {
  await this.viewerPage.setDashboardMode();
  expect(await this.viewerPage.isDashboardMode()).toBeTruthy();
});

Given('the viewer is in page view', async function (this: CustomWorld) {
  await this.viewerPage.setPageMode();
  expect(await this.viewerPage.isPageMode()).toBeTruthy();
});

Given('the scroll direction is horizontal', async function (this: CustomWorld) {
  const isDashboardMode = await this.viewerPage.isDashboardMode();
  if (!isDashboardMode) {
    await this.viewerPage.setDashboardMode();
  }
  await this.viewerPage.setHorizontalScrollDirection();
  await this.animations.waitFor();
});

Given('the scroll direction is vertical', async function (this: CustomWorld) {
  const isDashboardMode = await this.viewerPage.isDashboardMode();
  if (!isDashboardMode) {
    await this.viewerPage.setDashboardMode();
  }
  await this.viewerPage.setVerticalScrollDirection();
  await this.animations.waitFor();
});

Given('the viewer should be in page view', async function (this: CustomWorld) {
  expect(await this.viewerPage.isPageMode()).toBeTruthy();
});

When('the user click in the viewer', async function (this: CustomWorld) {
  // TODO click page.getSVGElement() insted of first overlay
  // to be able to switch view mode when firste page is out of view
  const overlay = await this.viewerPage.getSVGElement();
  await overlay.click();
  await this.animations.waitFor(switchAnimationTime);
});

Then(
  'the viewer should change to page view',
  async function (this: CustomWorld) {
    expect(await this.viewerPage.isPageMode()).toBeTruthy();
  },
);

Then(
  'the viewer should change to dashboard view',
  async function (this: CustomWorld) {
    expect(await this.viewerPage.isDashboardMode()).toBeTruthy();
  },
);

Then(
  'the publication should be rendered horizontally',
  async function (this: CustomWorld) {
    const canvasBoundingBox = await this.viewerPage.getCanvasBoundingBox();

    expect(canvasBoundingBox.width).toBeGreaterThan(canvasBoundingBox.height);
  },
);

Then(
  'the publication should be rendered vertically',
  async function (this: CustomWorld) {
    const canvasBoundingBox = await this.viewerPage.getCanvasBoundingBox();

    expect(canvasBoundingBox.height).toBeGreaterThan(canvasBoundingBox.width);
  },
);
