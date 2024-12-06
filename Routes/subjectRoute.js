import express from "express";
import {
    createSubject,
    getSubjects,
    updateSubject,
    deleteSubject,
} from "../Controllers/subjectController.js";

const router = express.Router();

router.post("/create", createSubject);

router.get("/getSubjects", getSubjects);

router.put("/update/:subjectId", updateSubject);

router.delete("/delete/:subjectId", deleteSubject);

export default router;
