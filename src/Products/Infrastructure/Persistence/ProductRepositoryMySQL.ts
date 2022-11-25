import ProductRepository from '../../Domain/ProductRepository';
import Product, {ProductOptionalAttributes} from "../../Domain/Product";
import {injectable} from "inversify";

@injectable()
export default class ProductRepositoryMySQL implements ProductRepository {
    async find(productID: number): Promise<Product | null> {
        // @ts-ignore TODO: Borrar
        return await Product.findOne({ where: { id: productID } });
    }

    async findAll(): Promise<Product[]> {
        // @ts-ignore TODO: Borrar
        return await Product.findAll({ raw: true });
    }

    async delete(product: Product): Promise<void> {
        // @ts-ignore
        await Product.destroy({ where: { id: product.id } });
    }

     async update(product: Product, newValues: ProductOptionalAttributes) {
        // @ts-ignore
        //return product.set(newValues);
        return await Product.update(newValues, {where:{id:product.id, include: [Product]}});
        //return product.set(newValues);
    }

    async save(product: Product): Promise<Product> {
        return await product.save();
    }
}