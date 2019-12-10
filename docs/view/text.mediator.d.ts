declare var mvc: typeof puremvc;
export declare class TextMediator extends mvc.Mediator {
    static readonly NAME: string;
    constructor(name: string, id: string, value: string);
    updateText(value: string): void;
}
export {};
