class ValidationError extends Error {
  statusCode;
  constructor(message) {
    super(message);
    this.name = "ValidationError";
    this.statusCode = 400;
  }
}

class NotFoundError extends Error {
  statusCode;
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
    this.statusCode = 404;
  }
}

class UnauthorizedError extends Error {
  statusCode;
  constructor(message) {
    super(message);
    this.name = "UnauthorizedError";
    this.statusCode = 401;
  }
}

class DuplicateEntryError extends Error {
  statusCode;
  constructor(message) {
    super(message);
    this.name = "DuplicateEntryError";
    this.statusCode = 409;
  }
}

class PrimaryKeyEntryError extends Error {
  statusCode;
  constructor(message) {
    super(message);
    this.name = "PrimaryKeyEntryError";
    this.statusCode = 409;
  }
}

class ForeignKeyEntryError extends Error {
  statusCode;
  constructor(message) {
    super(message);
    this.name = "ForeignKeyEntryError";
    this.statusCode = 422;
  }
}

export { ValidationError, NotFoundError, UnauthorizedError, DuplicateEntryError, PrimaryKeyEntryError, ForeignKeyEntryError };
