import {inject, injectable} from "inversify";
import ProductRepository from "../Domain/ProductRepository";
import DomainProductFinder from "../Domain/ProductFinder";

@injectable()
export default class ProductDeleter {
    private productFinder: DomainProductFinder;

    constructor(@inject("ProductRepository") private productRepository: ProductRepository) {
        this.productFinder = new DomainProductFinder(productRepository)
    }

    public async delete(productId: number) {
        const product = await this.productFinder.find(productId);
        await this.productRepository.delete(product);
    }
}