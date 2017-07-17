let id = 0;

export default class Quote {
    constructor(text) {
        this.id = id++;
        this.text = text;
    }
}