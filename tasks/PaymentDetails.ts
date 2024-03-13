import { Actor, Task } from "@testla/screenplay-playwright";
import { BrowseTheWeb, Click, Fill, Navigate, Press, Wait } from "@testla/screenplay-playwright/web";
import { Page } from "@playwright/test";
import { PayUI } from "../userinterfaces/PayUI";


export class PaymentDetails extends Task {

    page:Page
    constructor(page:Page){
        super();
        this.page = page;
    }

    async performAs(actor: Actor): Promise<any> {
        await this.page.screenshot({ path: 'Screenshots/screenshot1.png', fullPage: true });
        await actor.attemptsTo( Fill.in(PayUI.CODE_INPUT, actor.states('code')),
        Fill.in(PayUI.CONFIRM_CODE_INPUT, actor.states('confirmCode'))
        );
        const businessNameTextBoxVisible = await BrowseTheWeb.as(actor).getPage().frameLocator("//iframe[@id='iframe-facturador' or @id='iframe-nofacturador']").locator("//apc-input/input[contains(@id, 'razon')]").isVisible();
        if (businessNameTextBoxVisible) {
            await actor.attemptsTo(Fill.in(PayUI.BUSINESS_NAME_INPUT, actor.states('businessName')));
        }
        const valueTextBoxVisible = await BrowseTheWeb.as(actor).getPage().frameLocator("//iframe[@id='iframe-facturador' or @id='iframe-nofacturador']").locator("//apc-input/input[contains(@id, 'valor')]").isVisible();
        if (valueTextBoxVisible) {
            await actor.attemptsTo(Fill.in(PayUI.VALUE_INPUT, actor.states('value')));
        }
        await actor.attemptsTo(Fill.in(PayUI.DETAIL_INPUT, actor.states('detail')));
        await this.page.screenshot({ path: 'Screenshots/screenshot2.png', fullPage: true });
        await actor.attemptsTo(Click.on(PayUI.CONTINUE_BUTTON),
        Click.on(PayUI.ACCEPT_TERMS_CHECK));
        await this.page.screenshot({ path: 'Screenshots/screenshot3.png', fullPage: true });
        actor.attemptsTo(Click.on(PayUI.PAY_BUTTON));
    }

    public static service(page:Page): PaymentDetails{
        return new PaymentDetails(page);
    }

}