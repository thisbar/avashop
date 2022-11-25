import {inject, injectable} from "inversify";
import ProductRepository from "../Domain/ProductRepository";

@injectable()
export default class ProductFinder {
    constructor(@inject("ProductRepository") private productRepository: ProductRepository) {
    }

    public async findAll() {
        return await this.productRepository.findAll();
    }

}