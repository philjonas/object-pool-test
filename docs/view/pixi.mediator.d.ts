declare var mvc: typeof puremvc;
export declare class PixiMediator extends mvc.Mediator {
    static readonly NAME: string;
    constructor(name: string, id: string);
    createGameLoop(): void;
    update(delta: number): void;
}
export {};
