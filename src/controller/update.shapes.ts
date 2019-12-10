var mvc: typeof puremvc = require('puremvc-typescript-standard-framework');
import { PixiProxy } from '../model/pixi.proxy';
import { EventNames } from '../event.names';

export class UpdateShapesPerSecond extends mvc.SimpleCommand {
    public execute(event: puremvc.Notification) {
        const proxy: PixiProxy = this.facade.retrieveProxy(PixiProxy.NAME) as PixiProxy;
        const eventName = event.getName();

        let s = proxy.shapesPerSecond;
        if (eventName === EventNames.MVC_PREFIX + EventNames.SHAPES_PLUS) {
            s += 1;
        } else if (eventName === EventNames.MVC_PREFIX + EventNames.SHAPES_MINUS) {
            s -= 1;
        }
        proxy.shapesPerSecond = Math.max(1, s);
    }
}