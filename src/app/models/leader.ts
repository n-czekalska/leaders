import { Description } from "./description";
import { Image } from "./image";
export class Leader {
    name!: string;
    nameClass!: string;
    image!: Image;
    colour!: string;
    description!: Description[];

    constructor(name: string, nameClass: string, image: Image, colour: string, description: Description[]) {
        this.name = name;
        this.nameClass = nameClass;
        this.image = image;
        this.colour = colour;
        this.description = description;
    }
}