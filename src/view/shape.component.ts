import { Point, Graphics } from 'pixi.js';


export class ShapeComponent {
    static readonly FAST_PI = parseFloat(Math.PI.toFixed(2));
    static readonly THREE_SIDES = '3 sides';
    static readonly FOUR_SIDES = '4 sides';
    static readonly FIVE_SIDES = '5 sides';
    static readonly SIX_SIDES = '6 sides';
    static readonly CIRCLE = 'circle';
    static readonly ELLIPSE = 'ellipse';
    static readonly SHAPES = [
        ShapeComponent.THREE_SIDES,
        ShapeComponent.FOUR_SIDES,
        ShapeComponent.FIVE_SIDES,
        ShapeComponent.SIX_SIDES,
        ShapeComponent.CIRCLE,
        ShapeComponent.ELLIPSE,
    ];
    static readonly RED = 0xFF0000;
    static readonly GREEN = 0x00FF00;
    static readonly BLUE = 0x0000FF;
    static readonly COLORS = [
        ShapeComponent.RED,
        ShapeComponent.GREEN,
        ShapeComponent.BLUE,
    ];
    static readonly STANDARD_SIDE = 50;

    private _shape: Graphics;
    private _type: string;
    private _area: number;
    private _color: number;
    private _velocity: number;
    private _visible: boolean;
    constructor(randomNumber: number) {
        this._shape = new Graphics();
        this._shape.interactive = true;
        this._shape.on('touchstart', this.onTouch.bind(this));
        this._shape.on('mousedown', this.onTouch.bind(this));
        this._type = this.getType(randomNumber);
        this._shape.beginFill(this.getColor(randomNumber));
        this.draw();
        this._shape.endFill();
    }

    getType(value: number): string {
        const index = value % ShapeComponent.SHAPES.length;
        return ShapeComponent.SHAPES[index];
    }

    getColor(value: number): number {
        const index = value % ShapeComponent.COLORS.length;
        return ShapeComponent.COLORS[index];
    }

    onTouch(): void {
        this.visible = false;
    }

    draw(): void {
        switch (this._type) {
            case ShapeComponent.THREE_SIDES:
                this.makePolygon([
                    new Point(ShapeComponent.STANDARD_SIDE / 2, 0),
                    new Point(0, ShapeComponent.STANDARD_SIDE),
                    new Point(ShapeComponent.STANDARD_SIDE, ShapeComponent.STANDARD_SIDE),
                ]);
                break;
            case ShapeComponent.FOUR_SIDES:
                this.makePolygon([
                    new Point(0, 0),
                    new Point(ShapeComponent.STANDARD_SIDE, 0),
                    new Point(ShapeComponent.STANDARD_SIDE, ShapeComponent.STANDARD_SIDE),
                    new Point(0, ShapeComponent.STANDARD_SIDE),
                ]);
                break;
            case ShapeComponent.FIVE_SIDES:
                this.makePolygon([
                    new Point(0, 0),
                    new Point(ShapeComponent.STANDARD_SIDE, 0),
                    new Point(ShapeComponent.STANDARD_SIDE, ShapeComponent.STANDARD_SIDE),
                    new Point(ShapeComponent.STANDARD_SIDE * 0.5, ShapeComponent.STANDARD_SIDE * 1.5),
                    new Point(0, ShapeComponent.STANDARD_SIDE),
                ]);
                break;
            case ShapeComponent.SIX_SIDES:
                this.makePolygon([
                    new Point(0, 0),
                    new Point(ShapeComponent.STANDARD_SIDE * 0.5, ShapeComponent.STANDARD_SIDE * -0.5),
                    new Point(ShapeComponent.STANDARD_SIDE, 0),
                    new Point(ShapeComponent.STANDARD_SIDE, ShapeComponent.STANDARD_SIDE),
                    new Point(ShapeComponent.STANDARD_SIDE * 0.5, ShapeComponent.STANDARD_SIDE * 1.5),
                    new Point(0, ShapeComponent.STANDARD_SIDE),
                ]);
                break;
            case ShapeComponent.CIRCLE:
                this._shape.drawCircle(
                    0, 0,
                    ShapeComponent.STANDARD_SIDE / 2);
                this._area = ((ShapeComponent.STANDARD_SIDE / 2) ** 2) * ShapeComponent.FAST_PI;
                break;
            case ShapeComponent.ELLIPSE:
                this._shape.drawEllipse(
                    0, 0,
                    ShapeComponent.STANDARD_SIDE, ShapeComponent.STANDARD_SIDE / 2);
                this._area = ShapeComponent.STANDARD_SIDE * (ShapeComponent.STANDARD_SIDE / 2) *
                    ShapeComponent.FAST_PI;
                break;
        }
    }

    getShape(): Graphics {
        return this._shape;
    }

    getArea(): number {
        return this._area;
    }

    updateVelocity(acceleration: number): void {
        this._velocity += acceleration;
        this._shape.y += this._velocity;
    }

    init(): void {
        this._velocity = 0;
        this._shape.y = 0;
        this._shape.x = 0;
        this.visible = true;
    }

    set visible(value: boolean) {
        this._shape.alpha = value ? 1 : 0;
        this._visible = value;
    }

    get visible(): boolean {
        return this._visible;
    }

    makePolygon(arr: Point[]): void {
        this._shape.drawPolygon(arr);
        this.areaFinder(arr);
    }

    areaFinder(arr: Point[]): void {
        // cool trick :)
        // https://www.mathopenref.com/coordpolygonarea.html
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (i < arr.length - 1) {
                sum += (arr[i].x * arr[i + 1].y) - (arr[i].y * arr[i + 1].x);
            } else {
                sum += (arr[i].x * arr[0].y) - (arr[i].y * arr[0].x);
            }
        }
        this._area = sum / 2;
    }
}