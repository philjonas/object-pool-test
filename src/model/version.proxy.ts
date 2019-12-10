var mvc: typeof puremvc = require('puremvc-typescript-standard-framework');
import { VersionDTO } from './version.dto';


export class VersionProxy extends mvc.Proxy {
    static readonly NAME: string = 'VersionProxy';
    data: VersionDTO;
    constructor(name: string) {
        super(name);
        this.data = new VersionDTO();
    }
}
