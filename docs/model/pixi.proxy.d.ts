declare var mvc: typeof puremvc;
import { PixiDTO } from './pixi.dto';
import { ShapeComponent } from '../view/shape.component';
import { Point, Graphics } from 'pixi.js';
export declare class PixiProxy extends mvc.Proxy {
    static readonly NAME: string;
    data: PixiDTO;
    constructor(name: string);
    gravity: number;
    numberOfShapes: number;
    shapesTotalArea: number;
    shapesPerSecond: number;
    initShapesOffScreen(): void;
    addShapeToScreen(): ShapeComponent;
    randomlyPlaceShape(delta: number, viewWidth: number): Graphics;
    placeShapeAt(point: Point): Graphics;
    removeShapeFromScreen(i: number): void;
    readonly shapesOnScreen: ShapeComponent[];
    setHeight(value: number): void;
    setWidth(value: number): void;
    updateVelocity(delta: number, viewHeight: number): void;
    cleanUpPool(): void;
}
export {};
