var mvc: typeof puremvc = require('puremvc-typescript-standard-framework');
import { VersionProxy } from '../model/version.proxy';
import { TextMediator } from '../view/text.mediator';
import { ElementNames } from '../element.names';

export class GetVersion extends mvc.SimpleCommand {
    public execute(): void {
        const versionProxy: VersionProxy = new VersionProxy(VersionProxy.NAME);

        const pixiMediator: TextMediator = new TextMediator(
            'PixiJS' + TextMediator.NAME,
            ElementNames.PIXI_ID,
            'PixiJS Version: ' + versionProxy.data.pixiJsVersion);

        const mvcMediator: TextMediator = new TextMediator(
            'PureMvc' + TextMediator.NAME,
            ElementNames.MVC_ID,
            'PureMvc Version: ' + versionProxy.data.pureMvcVersion);

        this.facade.registerProxy(versionProxy);
        this.facade.registerMediator(pixiMediator);
        this.facade.registerMediator(mvcMediator);
    }

}