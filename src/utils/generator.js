class Generator {
    constructor() {
        this.m = 4294967296;
        this.a = 1664525;
        this.c = 1013904223;
        this._last = Date.now();
    }

    getNext() {
        // this._last = (this.a * this._last + this.c) % this.m;
        // return Number(toFixed(this._last / this.m, 4));
        return Math.random();
    }
}

export function uniform(a, b) {
    let generator = new Generator();
    let r;
    let temp;

    temp = (generator.getNext() * (b - a));
    r = (Number(a) + temp);
    return Number(toFixed(r, 4));
}

export function toFixed(num, fixed) {
    let re = new RegExp("^-?\\d+(?:.\\d{0," + (fixed || -1) + "})?");
    return num.toString().match(re) ? num.toString().match(re)[0] : num.toString();
}