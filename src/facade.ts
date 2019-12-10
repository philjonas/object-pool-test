var mvc: typeof puremvc = require('puremvc-typescript-standard-framework');
import { InitApp } from './controller/init.app';
import { EventNames } from './event.names';

export class GameFacade extends mvc.Facade {


    start(): void {
        this.sendNotification(EventNames.INIT_APP);
    }

    initializeController(): void {
        super.initializeController();
        this.registerCommand(EventNames.INIT_APP, InitApp);
    }

}