import { Category } from "./category.model";

export class subCategory extends Category {
    constructor(
        public id: number,
        public name: string
    ) {
        super(id,name)
    }
}