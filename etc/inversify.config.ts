import "reflect-metadata";
import {Container} from "inversify";
import ProductRepository from "../src/Products/Domain/ProductRepository";
import ProductRepositoryMySQL from "../src/Products/Infrastructure/Persistence/ProductRepositoryMySQL";

const myContainer = new Container({
    autoBindInjectable: true
});

myContainer.bind<ProductRepository>("ProductRepository").to(ProductRepositoryMySQL);

export { myContainer };