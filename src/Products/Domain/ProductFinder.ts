import {inject, injectable} from "inversify";
import ProductRepository from "../Domain/ProductRepository";
import ProductNotFound from "../Domain/ProductNotFound";
import Product from "./Product";

@injectable()
export default class ProductFinder {
    constructor(private productRepository: ProductRepository) {
    }

    public async find(productId: number): Promise<Product> {
        const product = await this.productRepository.find(productId);

        if (product === null) throw new ProductNotFound(productId);

        return product;
    }
}