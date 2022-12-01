import Product, {ProductOptionalAttributes} from './Product';

export default interface ProductRepository {
    find(productID: number): Promise<Product | null>;
    findAll(): Promise<Product[]>;
    delete(product: Product): Promise<void>;
    update(product: Product, newValues: ProductOptionalAttributes): Promise<Product>;
    save(product: Product): Promise<Product>;
}