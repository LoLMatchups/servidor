import db from "../config/db.js";

import tryCatch from "../utils/tryCatch.js";
import { STATUS_OK, resultHandler } from "../utils/resultHandler.js";
import { getChampionsService } from "../services/championsService.js";

export class Champions {
  async getChampions(req, res, next) {
    await tryCatch(async (req, res, next) => {
      const conn = await db.getConnection();
      try {
        const [results] = await conn.query(getChampionsService);
        resultHandler({ status: STATUS_OK, success: true, result: results }, res, conn);
      } finally {
        conn.release();
      }
    })(req, res, next);
  }
}
