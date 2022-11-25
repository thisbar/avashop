import {StatusCodes} from "http-status-codes";
import HttpDomainError from "../../shared/Domain/HttpDomainError";

export default class ProductNotFound extends Error implements HttpDomainError {
    public readonly httpStatus = StatusCodes.NOT_FOUND
    message: string;

    constructor(id: number) {
        super();

        this.message = `Producto con id '${id}' no encontrado`;
    }

}