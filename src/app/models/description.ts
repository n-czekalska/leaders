export class Description {
    text!: string;
    cssClass!: string;

    constructor(text: string, cssClass: string) {
        this.text = text;
        this.cssClass = cssClass;
    }
}