var mvc: typeof puremvc = require('puremvc-typescript-standard-framework');
import { ElementNames } from '../element.names';
import { EventNames } from '../event.names';
import { TextMediator } from '../view/text.mediator';
import { PixiProxy } from '../model/pixi.proxy';
import { UpdateText } from './update.text';

export class InitText extends mvc.SimpleCommand {
    public execute() {
        const proxy: PixiProxy = this.facade.retrieveProxy(PixiProxy.NAME) as PixiProxy;

        const gravityText: TextMediator = new TextMediator(
            EventNames.SET_GRAVITY + TextMediator.NAME,
            ElementNames.GRAVITY_TXT_ID,
            String(proxy.gravity)
        );
        const shapesPerSecText: TextMediator = new TextMediator(
            EventNames.SHAPES_SECOND + TextMediator.NAME,
            ElementNames.SHAPES_TXT_ID,
            String(proxy.shapesPerSecond)
        );
        const totalAreaText: TextMediator = new TextMediator(
            EventNames.TOTAL_AREA + TextMediator.NAME,
            ElementNames.TOTAL_AREA_ID,
            String(proxy.shapesTotalArea)
        );
        const shapesTotalNumberText: TextMediator = new TextMediator(
            EventNames.SHAPES_NUMBER + TextMediator.NAME,
            ElementNames.SHAPES_NUMBER_ID,
            String(proxy.numberOfShapes)
        );

        this.facade.registerCommand(EventNames.SET_GRAVITY, UpdateText);
        this.facade.registerCommand(EventNames.SHAPES_SECOND, UpdateText);
        this.facade.registerCommand(EventNames.TOTAL_AREA, UpdateText);
        this.facade.registerCommand(EventNames.SHAPES_NUMBER, UpdateText);

        this.facade.registerMediator(gravityText);
        this.facade.registerMediator(shapesPerSecText);
        this.facade.registerMediator(totalAreaText);
        this.facade.registerMediator(shapesTotalNumberText);

        // TODO: fix this later
        this.sendNotification(EventNames.SET_GRAVITY);
        this.sendNotification(EventNames.SHAPES_SECOND);
    }
}