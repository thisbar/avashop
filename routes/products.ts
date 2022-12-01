import {Router} from "express";
import {
    createProduct,
    deleteProduct,
    findAllProducts,
    findProduct,
    patchProduct,
    updateProductImage
} from "../src/Products/Infrastructure/Http/ProductsController";
import {createProductValidator, patchProductValidator} from "../src/shared/Infrastructure/Http/Validators/Products";

const router = Router();

router.get('/:id', findProduct);
router.delete('/:id', deleteProduct);
router.patch('/:id', patchProductValidator, patchProduct);
router.put('/:id/images', updateProductImage);
router.post('/', createProductValidator, createProduct);
router.get('/', findAllProducts);

export { router };