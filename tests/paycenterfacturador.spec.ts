import { test } from '@playwright/test';
import { Actor } from '@testla/screenplay-playwright';
import { BrowseTheWeb, Element } from '@testla/screenplay-playwright/web';
import { OpenPage } from '../tasks/OpenPage';
import { SearchService } from '../tasks/SearchService';
import { PaymentDetails } from '../tasks/PaymentDetails';
import { EnterHolderInformation } from '../tasks/EnterHolderInfomation';
import { SelectBank } from '../tasks/SelectBank';
import { LoginBankVillas } from '../tasks/LoginBankVillas';
import { BankVillasUI } from '../userinterfaces/BankVillasUi';

test('pay aval center facturador', async ({ page }) => {

    const actor = Actor.named('actor')
      .with('url', 'https://www.avalpaycenter.com/wps/portal/portal-de-pagos')
      .with('service', 'Vanti sa esp gas natural')
      .with('code', '63941175')
      .with('confirmCode', '63941175')
      .with('businessName', 'Asociacion 5')
      .with('value', '6860')
      .with('detail', 'pago recibo del servicio')
      .with('documentType', 'Cedula de Ciudadania')
      .with('documentNumber', '1234567890')
      .with('nameHolder', 'Pedro Fernandez')
      .with('email', 'pruebapedrofernandez@gmail.com')
      .with('confirmEmail', 'pruebapedrofernandez@gmail.com')
      .with('country', 'Colombia')
      .with('mobile', '3280000000')
      .with('confirmMobile', '3280000000')
      .with('bank', 'VILLAS')
      .with('documentTypeBank', 'Cédula de Ciudadanía')
      .with('documentNumberBank', '1234567890')
      .with('passworkBank', '123456')
      .can(BrowseTheWeb.using(page));
 
    await actor.attemptsTo(OpenPage.avalPayCenter());

    await actor.attemptsTo(SearchService.of(page));

    await actor.attemptsTo(PaymentDetails.service(page));

    await actor.attemptsTo(EnterHolderInformation.pay(page));

    await actor.attemptsTo(SelectBank.pay(page));

    await actor.attemptsTo(LoginBankVillas.enter(page));

    await actor.asks(Element.toBe.visible(BankVillasUI.MESSAGE_ERROR_LABEL));
    //await page.pause()
});