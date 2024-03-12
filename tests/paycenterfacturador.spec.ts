import { test } from '@playwright/test';
import { Actor } from '@testla/screenplay-playwright';
import { BrowseTheWeb, Element } from '@testla/screenplay-playwright/web';
import { OpenPage } from '../tasks/OpenPage';
import { SearchService } from '../tasks/SearchService';

test('pay aval center facturador', async ({ page }) => {

    const actor = Actor.named('actor')
      .with('url', 'https://www.avalpaycenter.com/wps/portal/portal-de-pagos')
      .with('service', 'Vanti sa esp gas natural')
      .can(BrowseTheWeb.using(page));

    await actor.attemptsTo(OpenPage.avalPayCenter());

    await actor.attemptsTo(SearchService.of(page));

    await page.pause()
});