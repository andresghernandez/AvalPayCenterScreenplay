import { Actor, Task } from "@testla/screenplay-playwright";
import { Click, Fill, Navigate, Press } from "@testla/screenplay-playwright/web";


export class OpenPage extends Task {

    async performAs(actor: Actor): Promise<any> {
       actor.attemptsTo(Navigate.to(actor.states('url')));
    }

    public static avalPayCenter(): OpenPage {
        return new OpenPage();
    }

}