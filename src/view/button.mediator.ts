var mvc: typeof puremvc = require('puremvc-typescript-standard-framework');
import { ButtonComponent } from './button.component';
import { EventNames } from '../event.names';

export class ButtonMediator extends mvc.Mediator {
    static readonly NAME: string = 'ButtonMediator';
    private _eventName: string;
    constructor(name: string, id: string, eventName: string) {
        super(name);
        this.viewComponent = new ButtonComponent(id, eventName);
        this._eventName = eventName;
    }

    public listNotificationInterests() {
        return [this._eventName];
    }

    public handleNotification(event: puremvc.INotification): void {
        this.sendNotification(EventNames.MVC_PREFIX + event.getName());
    }
}