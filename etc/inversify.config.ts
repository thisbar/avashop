import "reflect-metadata";
import {Container} from "inversify";
import ProductRepository from "../src/Products/Domain/ProductRepository";
import ProductRepositoryMySQL from "../src/Products/Infrastructure/Persistence/ProductRepositoryMySQL";
import ImageUploader from "../src/ImageUploader/Domain/ImageUploader";
import FirebaseStorageImageUploader from "../src/ImageUploader/Infrastructure/FirebaseStorageImageUploader";

const myContainer = new Container({
    autoBindInjectable: true
});

myContainer.bind<ProductRepository>("ProductRepository").to(ProductRepositoryMySQL);
myContainer.bind<ImageUploader>("ImageUploader").to(FirebaseStorageImageUploader);

export { myContainer };