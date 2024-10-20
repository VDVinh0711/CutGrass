import { SafeKeyAsset } from '../../Helper/SafeKeyAsset';
import { SafeKeyEvent } from '../../Helper/SafeKeyEvent';
import { EventManager } from '../../Utils/Observer';
import { BaseButtonUI } from '../BaseButtonUI';

export class BtnSetting extends BaseButtonUI {
    constructor() {
        super({
            width: 100,
            height: 100,
            textureAsset:SafeKeyAsset.IMGBUttonSetting,
        });
        this.setButtonOnclick();
    }

    private setButtonOnclick() {
        if (this.button == null) return;
        this.button.on('click', function () {
            console.log("Button clicked");
            EventManager.emit(SafeKeyEvent.OpenUISetting);
        });
    }
}