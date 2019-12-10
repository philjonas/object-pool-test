declare var mvc: typeof puremvc;
export declare class ButtonMediator extends mvc.Mediator {
    static readonly NAME: string;
    private _eventName;
    constructor(name: string, id: string, eventName: string);
    listNotificationInterests(): string[];
    handleNotification(event: puremvc.INotification): void;
}
export {};
