import { Application, Graphics, Point, interaction } from 'pixi.js';

export class PixiComponent {
    private _element: HTMLElement;
    private _app: Application;
    private _clickListener: Graphics;
    private _clickedAt: Point;

    constructor(id: string) {
        this._element = document.getElementById(id);
        const rect = this._element.getBoundingClientRect();
        this._app = new Application({ width: rect.width, height: rect.height });
        this._element.appendChild(this._app.view);
        this._app.renderer.backgroundColor = 0x061639;
        this.createClickListener();
    }

    public update(fn: Function): void {
        this._app.ticker.add(delta => fn(delta));
    }

    public getApp(): Application {
        return this._app;
    }

    get width(): number {
        return this._app.screen.width;
    }

    get height(): number {
        return this._app.screen.height;
    }

    createClickListener(): void {
        this._clickListener = new Graphics();
        this._clickListener.interactive = true;
        this._clickListener.on('touchstart', this.onTouch.bind(this));
        this._clickListener.on('mousedown', this.onTouch.bind(this));
        this._clickListener.x = 0;
        this._clickListener.y = 0;
        this._clickListener.beginFill(0x061639);
        this._clickListener.drawPolygon([
            new Point(0, 0),
            new Point(0, this.width),
            new Point(this.height, 0),
            new Point(this.height, this.width)
        ]);
        this._clickListener.endFill();
        this._app.stage.addChild(this._clickListener);
        this.resetClickedAt();
    }

    private onTouch(event: interaction.InteractionEvent): void {
        this._clickedAt = event.data.global;
    }

    get clickedAt(): Point {
        return this._clickedAt;
    }

    resetClickedAt(): void {
        this._clickedAt = new Point(-1, -1);
    }

}