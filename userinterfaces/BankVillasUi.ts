export class BankVillasUI{
    static DOCUMENT_TYPE_BUTTON = (page) =>  page.locator("//label[@for='user-type-document']")
    static DOCUMENT_TYPE_SELECT = (page) =>  page.locator("//ul[@class='dropdown-list']//span")
    static DOCUMENT_NUMBER_INPUT = (page) =>  page.getByRole('textbox', { name: 'Número de documento' })
    static PASSWORD_INPUT = (page) =>  page.locator("//input[@id='user-password']")
    static ENTER_BUTTON = (page) =>  page.getByRole('button', { name: 'INGRESAR' })
    static MESSAGE_ERROR_LABEL = (page) =>  page.locator("//p[contains(text(), 'Los datos que ingresaste no son v')]")
}