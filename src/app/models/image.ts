import { Dimensions } from "./dimensions";

export class Image {
    alt!: string;
    dimensions!: Dimensions;
    url!: string;

    constructor(alt: string, dimensions: Dimensions, url: string) {
        this.alt = alt;
        this.dimensions = dimensions;
        this.url = url;
    }
}