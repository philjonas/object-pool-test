var mvc: typeof puremvc = require('puremvc-typescript-standard-framework');
import { PixiProxy } from '../model/pixi.proxy';
import { EventNames } from '../event.names';
import { TextMediator } from '../view/text.mediator';

export class UpdateText extends mvc.SimpleCommand {
    public execute(event: puremvc.Notification) {
        const eventName = event.getName();
        switch (eventName) {
            case EventNames.SET_GRAVITY:
                this.setGravity();
                break;
            case EventNames.SHAPES_SECOND:
                this.setShapesPerSec();
                break;
            case EventNames.SHAPES_NUMBER:
                this.setShapesNumber();
                break;
            case EventNames.TOTAL_AREA:
                this.setTotalArea();
                break;
        }
    }

    private setGravity(): void {
        const proxy: PixiProxy = this.facade.retrieveProxy(PixiProxy.NAME) as PixiProxy;
        const med: TextMediator = this.facade.retrieveMediator(EventNames.SET_GRAVITY + TextMediator.NAME) as TextMediator;
        med.updateText(`Gravity Value: ${proxy.gravity}`);
    }

    private setShapesPerSec(): void {
        const proxy: PixiProxy = this.facade.retrieveProxy(PixiProxy.NAME) as PixiProxy;
        const med: TextMediator = this.facade.retrieveMediator(EventNames.SHAPES_SECOND + TextMediator.NAME) as TextMediator;
        med.updateText(`Number of shapes per second: ${proxy.shapesPerSecond}`);
    }

    private setShapesNumber(): void {
        const proxy: PixiProxy = this.facade.retrieveProxy(PixiProxy.NAME) as PixiProxy;
        const med: TextMediator = this.facade.retrieveMediator(EventNames.SHAPES_NUMBER + TextMediator.NAME) as TextMediator;
        med.updateText(`Number of current shapes: ${proxy.numberOfShapes}`);
    }

    private setTotalArea(): void {
        const proxy: PixiProxy = this.facade.retrieveProxy(PixiProxy.NAME) as PixiProxy;
        const med: TextMediator = this.facade.retrieveMediator(EventNames.TOTAL_AREA + TextMediator.NAME) as TextMediator;
        med.updateText(`Surface Area Occupied by Shapes: ${proxy.shapesTotalArea}`);
    }
}