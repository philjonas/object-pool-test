var mvc: typeof puremvc = require('puremvc-typescript-standard-framework');
import { PixiMediator } from '../view/pixi.mediator';

export class GameLoop extends mvc.SimpleCommand {
    public execute(): void {
        const pixiMediator: PixiMediator = this.facade.retrieveMediator(PixiMediator.NAME) as PixiMediator;
        pixiMediator.createGameLoop();
    }
}