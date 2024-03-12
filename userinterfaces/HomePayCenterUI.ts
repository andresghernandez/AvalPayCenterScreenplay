export class HomePayCenterUI {

    static SERVICE_INPUT = (page) => page.frameLocator("//iframe[@id='iframe-buscador']").locator("//input[@id='search']")
    static SEARCH_BUTTON = (page) => page.frameLocator("//iframe[@id='iframe-buscador']").locator("//div[@class='search__button']/img")
    static PAY_BUTTON = (page) =>  page.frameLocator("//iframe[@id='iframe-buscador']").locator("//div[1]/div/a/p[contains(text(), 'Pagar')]")

}