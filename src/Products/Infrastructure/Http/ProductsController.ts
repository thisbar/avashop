import ProductsFinder from "../../Application/ProductsFinder";
import {myContainer} from "../../../../etc/inversify.config";
import {Request, Response} from "express";
import ProductFinder from "../../Application/ProductFinder";
import ProductDeleter from "../../Application/ProductDeleter";
import ProductCreator from "../../Application/ProductCreator";
import {StatusCodes} from "http-status-codes";
import Product from "../../Domain/Product";
import ProductPatchUpdater from "../../Application/ProductPatchUpdater";
import ProductImageUpdater from "../../Application/ProductImageUpdater";

const asyncHandler = require('express-async-handler')

export const findAllProducts = asyncHandler(async (req: Request , res: Response) => {
    const productsFinder: ProductsFinder = myContainer.get(ProductsFinder);
    const products = await productsFinder.findAll();

    return res.send(products);
});

export const findProduct = asyncHandler(async (req: Request , res: Response) => {
    const productFinder: ProductFinder = myContainer.get(ProductFinder);
    const products = await productFinder.find(<number><unknown>req.params.id);

    return res.send(products);
});

export const deleteProduct = asyncHandler(async (req: Request , res: Response) => {
    const productDeleter: ProductDeleter = myContainer.get(ProductDeleter);
    await productDeleter.delete(<number><unknown>req.params.id);

    return res.send({message: "Producto eliminado correctamente"});
});

export const createProduct = asyncHandler(async (req: Request , res: Response) => {
    const productCreator: ProductCreator = myContainer.get(ProductCreator);
    const { name, description, category, stock } = req.body;

    const product: Product = await productCreator.create(
        {
            name: name,
            description: description,
            url_image: "",
            category: <number><unknown>category,
            stock: <number><unknown>stock
        }
    );

    res.status(StatusCodes.CREATED);

    return res.send(product);
});

export const patchProduct = asyncHandler(async (req: Request , res: Response) => {
    const productUpdater: ProductPatchUpdater = myContainer.get(ProductPatchUpdater);
    const product: Product = await productUpdater.update(<number><unknown> req.params.id, req.body);

    res.status(StatusCodes.OK);

    return res.send(product.toJSON());
});

export const updateProductImage = asyncHandler(async (req: Request , res: Response) => {
    if (!req.files?.image) throw new Error('Product image is required');

    const productImageUpdater: ProductImageUpdater = myContainer.get(ProductImageUpdater);
    const product: Product = await productImageUpdater.update(<number><unknown> req.params.id, req.files.image);

    res.status(StatusCodes.OK);

    return res.send(product.toJSON());
});