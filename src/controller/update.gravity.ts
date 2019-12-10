var mvc: typeof puremvc = require('puremvc-typescript-standard-framework');
import { PixiProxy } from '../model/pixi.proxy';
import { EventNames } from '../event.names';

export class UpdateGravity extends mvc.SimpleCommand {
    public execute(event: puremvc.Notification) {
        const proxy: PixiProxy = this.facade.retrieveProxy(PixiProxy.NAME) as PixiProxy;
        const eventName = event.getName();

        let g = proxy.gravity;
        if (eventName === EventNames.MVC_PREFIX + EventNames.GRAVITY_PLUS) {
            g += 1;
        } else if (eventName === EventNames.MVC_PREFIX + EventNames.GRAVITY_MINUS) {
            g -= 1;
        }
        proxy.gravity = Math.max(1, g);
    }
}