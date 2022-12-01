import {inject, injectable} from "inversify";
import ProductRepository from "../Domain/ProductRepository";
import Product from "../Domain/Product";
import DomainProductFinder from "../Domain/ProductFinder";
import ImageUploadHandler from "../../shared/Infrastructure/Persistence/ImageUploadHandler";
import ImageUploader from "../../ImageUploader/Domain/ImageUploader";
import {UploadedFile} from "express-fileupload";

@injectable()
export default class ProductImageUpdater {
    private productFinder: DomainProductFinder;
    private imageHandler: ImageUploadHandler;

    constructor(
        @inject("ProductRepository") private productRepository: ProductRepository,
        @inject("ImageUploader") private imageUploader: ImageUploader
    ) {
        this.productFinder = new DomainProductFinder(productRepository)
        this.imageHandler = new ImageUploadHandler();
    }

    public async update(productId: number, image: UploadedFile): Promise<Product> {
        let product: Product = await this.productFinder.find(productId);

        const imagePath: string = this.imageHandler.handle(image);
        const remoteImageUrl: string = await this.imageUploader.upload(imagePath);

        product = this.productRepository.update(product, { url_image: remoteImageUrl });
        await this.productRepository.save(product);

        return product;
    }
}