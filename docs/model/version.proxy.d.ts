declare var mvc: typeof puremvc;
import { VersionDTO } from './version.dto';
export declare class VersionProxy extends mvc.Proxy {
    static readonly NAME: string;
    data: VersionDTO;
    constructor(name: string);
}
export {};
