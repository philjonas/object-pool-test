import { VERSION } from 'pixi.js';

export class VersionDTO {
    constructor(
        public pixiJsVersion = VERSION,
        public pureMvcVersion = '1.0.0'
    ) { }
}
