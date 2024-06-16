import { Router } from "express";

import champions from "./v1/champions/index.js";

const router = Router();

router.use(champions);

export default router;