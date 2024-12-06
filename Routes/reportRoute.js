import express from "express";
import { reportCardGenerator } from "../Utils/reportCardGenerator.js";

const router = express.Router();

router.get("/:id", reportCardGenerator);

export default router;
