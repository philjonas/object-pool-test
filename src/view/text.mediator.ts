var mvc: typeof puremvc = require('puremvc-typescript-standard-framework');
import { TextComponent } from './text.component';

export class TextMediator extends mvc.Mediator {
    static readonly NAME: string = 'TextMediator';

    constructor(name: string, id: string, value: string) {
        super(name);
        this.viewComponent = new TextComponent(id, value);
    }

    public updateText(value: string) {
        (this.viewComponent as TextComponent).updateText(value);
    }
}