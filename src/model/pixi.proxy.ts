var mvc: typeof puremvc = require('puremvc-typescript-standard-framework');
import { PixiDTO } from './pixi.dto';
import { EventNames } from '../event.names';
import { ShapeComponent } from '../view/shape.component';
import { Point, Graphics } from 'pixi.js';


export class PixiProxy extends mvc.Proxy {
    static readonly NAME: string = 'PixiProxy';
    data: PixiDTO;
    constructor(name: string) {
        super(name);
        this.data = new PixiDTO();
    }

    set gravity(value: number) {
        this.data.gravity = value;
        this.sendNotification(EventNames.SET_GRAVITY);
    }

    get gravity(): number {
        return this.data.gravity;
    }

    set numberOfShapes(value: number) {
        this.data.numberOfShapes = value;
        this.sendNotification(EventNames.SHAPES_NUMBER);
    }

    get numberOfShapes(): number {
        return this.data.numberOfShapes;
    }

    set shapesTotalArea(value: number) {
        this.data.shapesTotalArea = value;
        this.sendNotification(EventNames.TOTAL_AREA);
    }

    get shapesTotalArea(): number {
        return this.data.shapesTotalArea;
    }

    set shapesPerSecond(value: number) {
        this.data.shapesPerSecond = value;
        this.sendNotification(EventNames.SHAPES_SECOND);
    }

    get shapesPerSecond(): number {
        return this.data.shapesPerSecond;
    }

    initShapesOffScreen(): void {
        for (let i = 0; i < 100; i++) {
            const shape: ShapeComponent = new ShapeComponent(i);
            this.data.shapesOffScreen.push(shape);
        }
    }

    addShapeToScreen(): ShapeComponent {
        const shape: ShapeComponent = this.data.shapesOffScreen.pop();
        this.data.shapesOnScreen.push(shape);
        this.numberOfShapes += 1;
        this.shapesTotalArea += shape.getArea();
        shape.init();
        return shape;
    }

    randomlyPlaceShape(delta: number, viewWidth: number): Graphics {
        const p: Graphics = this.addShapeToScreen().getShape();
        const j = (delta * 1000) % this.shapesOnScreen.length;
        p.x = j * viewWidth / this.shapesPerSecond;
        return p;
    }

    placeShapeAt(point: Point): Graphics {
        const p: Graphics = this.addShapeToScreen().getShape();
        p.x = point.x;
        p.y = point.y;
        return p;
    }

    removeShapeFromScreen(i: number): void {
        const shape: ShapeComponent = this.shapesOnScreen[i];
        this.numberOfShapes -= 1;
        this.shapesTotalArea -= shape.getArea();
        this.data.shapesOffScreen.push(shape);
        this.shapesOnScreen[i] = null;
    }

    get shapesOnScreen(): ShapeComponent[] {
        return this.data.shapesOnScreen;
    }

    setHeight(value: number): void {
        this.data.appHeight = value;
    }

    setWidth(value: number): void {
        this.data.appWidth = value;
    }

    updateVelocity(delta: number, viewHeight: number): void {
        for (let i = 0; i < this.shapesOnScreen.length; i++) {
            if (this.shapesOnScreen[i] === null) {
                continue;
            }

            this.shapesOnScreen[i].updateVelocity(this.gravity);

            if (this.shapesOnScreen[i].getShape().y > viewHeight || !this.shapesOnScreen[i].visible) {
                this.removeShapeFromScreen(i);
            }
        }
        this.cleanUpPool();
    }

    cleanUpPool(): void {
        this.data.shapesOnScreen = this.data.shapesOnScreen.filter(x => !!x);
    }
}
