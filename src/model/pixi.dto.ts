import { ShapeComponent } from '../view/shape.component';

export class PixiDTO {
    constructor(
        public gravity = 1,
        public shapesTotalArea = 0,
        public shapesPerSecond = 3,
        public numberOfShapes = 0,
        public shapesOnScreen = new Array<ShapeComponent>(),
        public shapesOffScreen = new Array<ShapeComponent>(),
        public appWidth = 0,
        public appHeight = 0
    ) { }
}