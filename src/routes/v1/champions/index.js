import express from "express";

import { Champions } from "../../../controllers/champions.js";

const router = express.Router();

//rutas
router.get("/champions", new Champions().getChampions);

export default router;
