import express from "express";
import {
    createMarks,
    getMarks,
    updateMarks,
    deleteMarks,
} from "../Controllers/marksController.js";

const router = express.Router();

router.post("/create", createMarks);

router.get("/getMarks", getMarks);

router.put("/update/:marksId", updateMarks);

router.delete("/delete/:marksId", deleteMarks);

export default router;
