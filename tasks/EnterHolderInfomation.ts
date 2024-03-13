import { Actor, Task } from "@testla/screenplay-playwright";
import { BrowseTheWeb, Click, Fill, Navigate, Press, Wait, Element } from "@testla/screenplay-playwright/web";
import { Page, expect } from "@playwright/test";
import { PaymentDetailsUI } from "../userinterfaces/PaymentDetailsUI";
import { Select } from '@testla/screenplay-playwright/web/actions/Select';

export class EnterHolderInformation extends Task {

    page:Page
    constructor(page:Page){
        super();
        this.page = page;
    }

    async performAs(actor: Actor): Promise<any> {
        await this.page.screenshot({ path: 'Screenshots/screenshot4.png', fullPage: true });
        await actor.asks(Element.toBe.visible(PaymentDetailsUI.DOCUMENT_TYPE_SELECT));
        await actor.attemptsTo(Select.option(PaymentDetailsUI.DOCUMENT_TYPE_SELECT, actor.states('documentType')),
        Fill.in(PaymentDetailsUI.DOCUMENT_NUMBER_INPUT, actor.states('documentNumber')),
        Fill.in(PaymentDetailsUI.NAME_INPUT, actor.states('nameHolder')),
        Fill.in(PaymentDetailsUI.EMAIL_INPUT, actor.states('email')),
        Fill.in(PaymentDetailsUI.CONFIRM_EMAIL_INPUT, actor.states('confirmEmail')),
        Select.option(PaymentDetailsUI.COUNTRY_SELECT, actor.states('country')),
        Fill.in(PaymentDetailsUI.MOBILE_INPUT, actor.states('mobile')),
        Fill.in(PaymentDetailsUI.CONFIRM_MOBILE_INPUT, actor.states('confirmMobile'))
        );
        await this.page.screenshot({ path: 'Screenshots/screenshot5.png', fullPage: true });
    }

    public static pay(page:Page):EnterHolderInformation{
        return new EnterHolderInformation(page);
    }

}
