import { check } from "express-validator";
import { validateResults } from "./handleValidators";
import {Request, Response, NextFunction} from "express";

export const createProductValidator = [
  check("name").exists().notEmpty().trim().isLength({ min: 1, max: 180 }),
  check("description").exists().trim().isLength({ min: 100, max: 1000 }),
  check("category").exists().notEmpty().isInt({allow_leading_zeroes: false}),
  check("stock").optional().notEmpty().isInt({ min: 0, max: 100, allow_leading_zeroes: false}),
  (req: Request, res: Response, next: NextFunction)  => validateResults(req, res, next)
]

export const patchProductValidator = [
  check("name").optional().notEmpty().trim().isLength({ min: 1, max: 180 }),
  check("description").optional().trim().isLength({ min: 100, max: 1000 }),
  check("category").optional().notEmpty().isInt({ min: 1, allow_leading_zeroes: false}),
  check("stock").optional().notEmpty().isInt({ min: 0, max: 100, allow_leading_zeroes: false}),
  (req: Request, res: Response, next: NextFunction)  => validateResults(req, res, next)
]