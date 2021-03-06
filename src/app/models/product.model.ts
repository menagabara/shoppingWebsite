import { SubCategory } from "./subCategory.model";

export class Product extends SubCategory {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public rate: number, //PS: this could be changed to be a seperate document, if it would be handled here.
        public description: string,
        public image: string,
        public pieces: number
    ) {
        super(id,name)
    }
}

