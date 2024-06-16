const STATUS_OK = 200;
const STATUS_NOT_FOUND = 404;
const STATUS_NO_TOKEN = 401;
const STATUS_NO_ACCESS = 403;
const STATUS_CONFLICT = 409;

const resultHandler = (result, res, conn = undefined) => {
  if (conn) conn.end();

  const safeResult = JSON.parse(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? v.toString() : v)));
  res.status(safeResult.status).json(safeResult);
};

export { resultHandler, STATUS_OK, STATUS_NOT_FOUND, STATUS_NO_TOKEN, STATUS_NO_ACCESS };
