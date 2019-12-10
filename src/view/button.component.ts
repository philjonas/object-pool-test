var mvc: typeof puremvc = require('puremvc-typescript-standard-framework');

export class ButtonComponent {
    private _element: HTMLElement;
    private _event: puremvc.Notifier = new mvc.Notifier();

    constructor(id: string, eventName: string) {
        this._element = document.getElementById(id);
        this._element.addEventListener('click', () => {
            this._event.sendNotification(eventName);
        });
    }
}