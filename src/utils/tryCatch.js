import { DuplicateEntryError, PrimaryKeyEntryError, ForeignKeyEntryError } from "../utils/appError.js";

const tryCatch = (controller) => {
  return async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      switch (error.code) {
        case "ER_DUP_ENTRY":
          return next(new DuplicateEntryError("El usuario ya existe. " + error.sqlMessage));
        case "ER_ROW_IS_REFERENCED_2":
          return next(new PrimaryKeyEntryError("La clave principal está siendo usada. " + error.sqlMessage));
        case "ER_NO_REFERENCED_ROW_2":
          return next(new ForeignKeyEntryError("La clave foránea no existe. " + error.sqlMessage));
      }
      console.log(error);
      return next(error);
    }
  };
};

const tryCatchDefault = (fn) => {
  return async (...args) => {
    try {
      return await fn(...args);
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
};

export default tryCatch;
