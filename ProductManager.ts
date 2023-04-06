import {Product} from "./Product";

export class ProductManager {
    products: Product[] = [];

    constructor() {
    }

    add(product: Product) {
        this.products.push(product);
    }

    getAll() {
        return this.products;
    }
}