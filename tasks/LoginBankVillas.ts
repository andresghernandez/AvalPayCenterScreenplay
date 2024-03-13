import { Task, Actor } from "@testla/screenplay-playwright";
import { Page, expect } from "@playwright/test";
import { Click, BrowseTheWeb, Fill } from "@testla/screenplay-playwright/web";
import { BankVillasUI } from "../userinterfaces/BankVillasUi";

export class LoginBankVillas extends Task{

    page:Page
    constructor(page:Page){
        super();
        this.page = page;
    }

    async performAs(actor: Actor): Promise<any> {
        await actor.attemptsTo(Click.on(BankVillasUI.DOCUMENT_TYPE_BUTTON));
        for (let element of await BrowseTheWeb.as(actor).getPage().locator("//ul[@class='dropdown-list']//span").all()){
            const value = await element.innerText() 
            console.log("value: "+value);
            if (value === actor.states('documentTypeBank')){
                await element.click();
                break;
            }
        }
        await actor.attemptsTo(Fill.in(BankVillasUI.DOCUMENT_NUMBER_INPUT, actor.states('documentNumberBank')),
        Fill.in(BankVillasUI.PASSWORD_INPUT, actor.states('passworkBank'))
        );
        await this.page.screenshot({ path: 'Screenshots/screenshot7.png', fullPage: true });
        await actor.attemptsTo(Click.on(BankVillasUI.ENTER_BUTTON));
        await this.page.waitForTimeout(2000);
        await this.page.screenshot({ path: 'Screenshots/screenshot8.png', fullPage: true });
    }

    public static enter(page:Page):LoginBankVillas{
        return new LoginBankVillas(page);
    }
}