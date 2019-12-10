export class VersionComponent {
    private _element: HTMLElement;

    constructor(id: string, value: string) {
        this._element = document.getElementById(id);
        this._element.innerHTML = value;
    }
}