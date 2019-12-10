import { ShapeComponent } from '../view/shape.component';
export declare class PixiDTO {
    gravity: number;
    shapesTotalArea: number;
    shapesPerSecond: number;
    numberOfShapes: number;
    shapesOnScreen: ShapeComponent[];
    shapesOffScreen: ShapeComponent[];
    appWidth: number;
    appHeight: number;
    constructor(gravity?: number, shapesTotalArea?: number, shapesPerSecond?: number, numberOfShapes?: number, shapesOnScreen?: ShapeComponent[], shapesOffScreen?: ShapeComponent[], appWidth?: number, appHeight?: number);
}
