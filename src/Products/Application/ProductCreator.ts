import {inject, injectable} from "inversify";
import ProductRepository from "../Domain/ProductRepository";
import Product, {ProductAttributes} from "../Domain/Product";

@injectable()
export default class ProductCreator {
    constructor(@inject("ProductRepository") private productRepository: ProductRepository) {
    }

    public async create(productAttributes: ProductAttributes): Promise<Product> {
        const {name, description, url_image, category, stock} = productAttributes;

        const product: Product = Product.build({ name, description, url_image, category, stock });
        await this.productRepository.save(product);

        return product;
    }
}