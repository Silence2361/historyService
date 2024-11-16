import express from "express";
import { logAction, getHistory } from "../controllers/historyController.js";
import { validateLogAction } from "../middleware/validators/historyPostValidator.js";
import { validateGetHistory } from "../middleware/validators/historyGetValidator.js";

const router = express.Router();

router.post("/", validateLogAction, logAction);
router.get("/", validateGetHistory, getHistory);

export default router;
