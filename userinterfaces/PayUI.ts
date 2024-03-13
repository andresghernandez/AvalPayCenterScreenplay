import { Locator } from "@playwright/test"

export class PayUI{
        static CODE_INPUT = (page) => page.frameLocator("//iframe[@id='iframe-facturador' or @id='iframe-nofacturador']").locator("//div[@class='billers__body-form'][1]//apc-input/input")
        static CONFIRM_CODE_INPUT = (page) => page.frameLocator("//iframe[@id='iframe-facturador' or @id='iframe-nofacturador']").locator("//apc-input/input[contains(@id, 'onfirmar')]")
        static BUSINESS_NAME_INPUT = (page) => page.frameLocator("//iframe[@id='iframe-facturador' or @id='iframe-nofacturador']").locator("//apc-input/input[contains(@id, 'razon')]")
        static VALUE_INPUT = (page) => page.frameLocator("//iframe[@id='iframe-facturador' or @id='iframe-nofacturador']").locator("//apc-input/input[contains(@id, 'valor')]")
        static DETAIL_INPUT = (page) => page.frameLocator("//iframe[@id='iframe-facturador' or @id='iframe-nofacturador']").locator("//textarea[contains(@id, 'detalle')]")
        static CONTINUE_BUTTON = (page) =>  page.frameLocator("//iframe[@id='iframe-facturador' or @id='iframe-nofacturador']").getByText("Continuar")
        static ACCEPT_TERMS_CHECK = (page) => page.frameLocator("//iframe[@id='iframe-facturador' or @id='iframe-nofacturador']").locator("//div[@class='checkbox__container']")
        static PAY_BUTTON = (page) => page.frameLocator("//iframe[@id='iframe-facturador' or @id='iframe-nofacturador']").locator("//button/p[text()=' Pagar ']")
}