var mvc: typeof puremvc = require('puremvc-typescript-standard-framework');
import { VersionComponent } from './version.component';

export class VersionMediator extends mvc.Mediator {
    static readonly NAME: string = 'VersionMediator';

    constructor(name: string, id: string, value: string) {
        super(name);
        this.viewComponent = new VersionComponent(id, value);
    }
}