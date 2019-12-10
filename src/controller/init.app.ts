var mvc: typeof puremvc = require('puremvc-typescript-standard-framework');
import { GetVersion } from './get.version';
import { InitPixi } from './init.pixi';
import { InitButtons } from './init.buttons';
import { InitText } from './init.text';
import { GameLoop } from './game.loop';


export class InitApp extends mvc.MacroCommand {

    public initializeMacroCommand(): void {
        super.initializeMacroCommand();
        // init
        this.addSubCommand(GetVersion);
        this.addSubCommand(InitPixi);
        this.addSubCommand(InitButtons);
        this.addSubCommand(InitText);
        // play game
        this.addSubCommand(GameLoop);
    }
}