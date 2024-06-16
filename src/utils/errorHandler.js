import { ValidationError, NotFoundError, UnauthorizedError, DuplicateEntryError, PrimaryKeyEntryError, ForeignKeyEntryError } from "../utils/appError.js";
import { resultHandler } from "../utils/appError.js";

const errorHandler = (error, req, res, next) => {
  if (error instanceof ValidationError) {
    resultHandler({ status: error.statusCode, success: false, result: error.message }, res);
  }

  if (error instanceof DuplicateEntryError) {
    resultHandler({ status: error.statusCode, success: false, result: error.message }, res);
  }

  if (error instanceof PrimaryKeyEntryError || error instanceof ForeignKeyEntryError) {
    resultHandler({ status: error.statusCode, success: false, result: error.message }, res);
  }

  if (error instanceof NotFoundError || error instanceof UnauthorizedError) {
    resultHandler({ status: error.statusCode, success: false, result: error.message }, res);
  }

  if (!res.headersSent) {
    resultHandler({ status: 500, success: false, result: "Error interno del servidor" }, res);
  }
};

export default errorHandler;
