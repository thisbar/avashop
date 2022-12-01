import {inject, injectable} from "inversify";
import ProductRepository from "../Domain/ProductRepository";
import Product, {ProductOptionalAttributes} from "../Domain/Product";
import DomainProductFinder from "../Domain/ProductFinder";

@injectable()
export default class ProductPatchUpdater {
    private productFinder: DomainProductFinder;

    constructor(@inject("ProductRepository") private productRepository: ProductRepository) {
        this.productFinder = new DomainProductFinder(productRepository)
    }

    public async update(productId: number, newValues: ProductOptionalAttributes): Promise<Product> {
        let product: Product = await this.productFinder.find(productId);

        product = this.productRepository.update(product, newValues);
        await this.productRepository.save(product);

        return product;
    }
}