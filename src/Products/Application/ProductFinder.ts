import {inject, injectable} from "inversify";
import ProductRepository from "../Domain/ProductRepository";
import Product from "../Domain/Product";
import DomainProductFinder from "../Domain/ProductFinder";

@injectable()
export default class ProductFinder {
    private productFinder: DomainProductFinder;

    constructor(@inject("ProductRepository") productRepository: ProductRepository) {
        this.productFinder = new DomainProductFinder(productRepository)
    }

    public async find(productId: number): Promise<Product> {
        return await this.productFinder.find(productId);
    }
}