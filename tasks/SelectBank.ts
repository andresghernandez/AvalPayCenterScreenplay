import { Task, Actor } from "@testla/screenplay-playwright";
import { Page, Locator } from "@playwright/test";
import { BrowseTheWeb, Click, Element } from '@testla/screenplay-playwright/web';
import { PaymentDetailsUI } from "../userinterfaces/PaymentDetailsUI";

export class SelectBank extends Task{

    bankRadioList:Locator

    page:Page
    constructor(page:Page){
        super();
        this.page = page;
    }


    async performAs(actor: Actor): Promise<any> {
        //VILLAS, BOGOTA, OCCIDENTE, POPULAR//ng-reflect-value
        //const rows = await BrowseTheWeb.as(actor).getPage().locator("//input[@name='AvalBanks']").all();
        for (let element of await BrowseTheWeb.as(actor).getPage().locator("//input[@name='AvalBanks']").all()){
            const value = await element.getAttribute("ng-reflect-value");
            console.log("value: "+value);
            if (value === actor.states('bank')){
                await element.click();
                break;
            }
        }
        await this.page.screenshot({ path: 'Screenshots/screenshot6.png', fullPage: true });
        actor.attemptsTo(Click.on(PaymentDetailsUI.PAY_BUTTON));
    }

    public static pay(page:Page):SelectBank{
        return new SelectBank(page);
    }



}