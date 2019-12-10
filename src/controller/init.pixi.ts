var mvc: typeof puremvc = require('puremvc-typescript-standard-framework');
import { PixiMediator } from '../view/pixi.mediator';
import { PixiProxy } from '../model/pixi.proxy';
import { ElementNames } from '../element.names';
import { EventNames } from '../event.names';
import { UpdateGravity } from './update.gravity';
import { UpdateShapesPerSecond } from './update.shapes';

export class InitPixi extends mvc.SimpleCommand {
    public execute() {
        const pixiProxy: PixiProxy = new PixiProxy(PixiProxy.NAME);
        const pixiMediator: PixiMediator = new PixiMediator(PixiMediator.NAME, ElementNames.COMPONENT_ID);

        this.facade.registerCommand(EventNames.MVC_PREFIX + EventNames.GRAVITY_MINUS, UpdateGravity);
        this.facade.registerCommand(EventNames.MVC_PREFIX + EventNames.GRAVITY_PLUS, UpdateGravity);
        this.facade.registerCommand(EventNames.MVC_PREFIX + EventNames.SHAPES_MINUS, UpdateShapesPerSecond);
        this.facade.registerCommand(EventNames.MVC_PREFIX + EventNames.SHAPES_PLUS, UpdateShapesPerSecond);

        this.facade.registerProxy(pixiProxy);
        this.facade.registerMediator(pixiMediator);
    }
}