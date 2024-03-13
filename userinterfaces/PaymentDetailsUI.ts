
export class PaymentDetailsUI{ 
    
    static DOCUMENT_TYPE_SELECT = (page) => page.locator("//select[@name='documentTypeHolder']")
    static DOCUMENT_NUMBER_INPUT = (page) => page.locator("//input[@name='documentNumberHolder']")
    static NAME_INPUT = (page) => page.locator("//input[@name='nameHolder']")
    static EMAIL_INPUT = (page) => page.locator("//input[@name='emailHolder']")
    static CONFIRM_EMAIL_INPUT = (page) => page.locator("//input[@name='emailConfirmationHolder']")
    static COUNTRY_SELECT = (page) => page.locator("//select[@name='countryTypeHolder']")
    static MOBILE_INPUT = (page) => page.locator("//input[@name='movilHolder']")
    static CONFIRM_MOBILE_INPUT = (page) => page.locator("//input[@name='movilConfirmationHolder']")
    static BANK_RADIO_LIST = (page) => page.locator("//input[@name='AvalBanks']")
    static PAY_BUTTON = (page) => page.getByText("Pagar")

}