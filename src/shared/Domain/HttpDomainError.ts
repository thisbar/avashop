import {StatusCodes} from "http-status-codes";

interface HttpDomainError {
    httpStatus: StatusCodes,
    message: string
}

export default HttpDomainError;