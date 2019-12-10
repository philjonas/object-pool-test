var mvc: typeof puremvc = require('puremvc-typescript-standard-framework');
import { ButtonMediator } from '../view/button.mediator';
import { ElementNames } from '../element.names';
import { EventNames } from '../event.names';

export class InitButtons extends mvc.SimpleCommand {
    public execute() {
        const gravityMinusButton: ButtonMediator = new ButtonMediator(
            EventNames.GRAVITY_MINUS + ButtonMediator.NAME,
            ElementNames.GRAVITY_MINUS_ID,
            EventNames.GRAVITY_MINUS
        );
        const gravityPlusButton: ButtonMediator = new ButtonMediator(
            EventNames.GRAVITY_PLUS + ButtonMediator.NAME,
            ElementNames.GRAVITY_PLUS_ID,
            EventNames.GRAVITY_PLUS
        );
        const shapesPerSecMinusButton: ButtonMediator = new ButtonMediator(
            EventNames.SHAPES_MINUS + ButtonMediator.NAME,
            ElementNames.SHAPES_SEC_MINUS_ID,
            EventNames.SHAPES_MINUS
        );
        const shapesPerSecPlusButton: ButtonMediator = new ButtonMediator(
            EventNames.SHAPES_PLUS + ButtonMediator.NAME,
            ElementNames.SHAPES_SEC_PLUS_ID,
            EventNames.SHAPES_PLUS
        );

        this.facade.registerMediator(gravityMinusButton);
        this.facade.registerMediator(gravityPlusButton);
        this.facade.registerMediator(shapesPerSecMinusButton);
        this.facade.registerMediator(shapesPerSecPlusButton);
    }
}