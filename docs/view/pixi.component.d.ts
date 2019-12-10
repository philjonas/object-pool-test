import { Application, Point } from 'pixi.js';
export declare class PixiComponent {
    private _element;
    private _app;
    private _clickListener;
    private _clickedAt;
    constructor(id: string);
    update(fn: Function): void;
    getApp(): Application;
    readonly width: number;
    readonly height: number;
    createClickListener(): void;
    private onTouch;
    readonly clickedAt: Point;
    resetClickedAt(): void;
}
