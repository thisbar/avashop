import {Router} from "express";
const { body, validationResult } = require('express-validator');
import {
    createProduct,
    deleteProduct,
    findAllProducts,
    findProduct,
    patchProduct
} from "../src/Products/Infrastructure/Http/ProductsController";
import {
    createProductValidator,
    patchProductValidator
} from "../src/shared/Infrastructure/Http/Validators/Products";

const router = Router();

router.get('/:id', findProduct);
router.delete('/:id', deleteProduct);
router.patch('/:id', patchProductValidator, patchProduct);
router.post('/', createProductValidator, createProduct);
router.get('/', findAllProducts);

export { router };