import { Actor, Task } from "@testla/screenplay-playwright";
import { BrowseTheWeb, Click, Fill, Navigate, Press, Wait } from "@testla/screenplay-playwright/web";
import { HomePayCenterUI } from "../userinterfaces/HomePayCenterUI";

import { Page } from "@playwright/test";

export class SearchService extends Task {
    
    page:Page
    constructor(page:Page){
        super();
        this.page = page;
    }

    async performAs(actor: Actor): Promise<any> {
       await actor.attemptsTo(Fill.in(HomePayCenterUI.SERVICE_INPUT, actor.states('service')));
       await this.page.waitForTimeout(4000);
       await actor.attemptsTo(Click.on(HomePayCenterUI.SEARCH_BUTTON));
       await this.page.screenshot({ path: 'Screenshots/screenshot0.png', fullPage: true });
       await actor.attemptsTo(Click.on(HomePayCenterUI.PAY_BUTTON));
    }

    public static of(page:Page):SearchService{
        return new SearchService(page);
    }

}