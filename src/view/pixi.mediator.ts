var mvc: typeof puremvc = require('puremvc-typescript-standard-framework');
import { PixiComponent } from './pixi.component';
import { PixiProxy } from '../model/pixi.proxy';
import { ShapeComponent } from './shape.component';
import { Application, Graphics } from 'pixi.js';

export class PixiMediator extends mvc.Mediator {
    static readonly NAME: string = 'PixiMediator';

    constructor(name: string, id: string) {
        super(name);
        this.viewComponent = new PixiComponent(id);
    }

    createGameLoop(): void {
        const view: PixiComponent = this.viewComponent as PixiComponent;
        const proxy: PixiProxy = this.facade.retrieveProxy(PixiProxy.NAME) as PixiProxy;
        proxy.initShapesOffScreen();
        view.update(this.update.bind(this));
    }

    update(delta: number): void {
        const view: PixiComponent = this.viewComponent as PixiComponent;
        const app: Application = view.getApp();
        const proxy: PixiProxy = this.facade.retrieveProxy(PixiProxy.NAME) as PixiProxy;

        if (proxy.shapesOnScreen.length < proxy.shapesPerSecond) {
            const p: Graphics = proxy.randomlyPlaceShape(delta, view.width);
            app.stage.addChild(p);
        }

        if (view.clickedAt.x > 0 || view.clickedAt.y > 0) {
            const p: Graphics = proxy.placeShapeAt(view.clickedAt);
            app.stage.addChild(p);
            view.resetClickedAt();
        }

        proxy.updateVelocity(delta, view.height);
    }
}