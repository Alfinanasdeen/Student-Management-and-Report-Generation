import express from "express";
import {
  createStudent,
  getStudents,
  updateStudent,
  deleteStudent,
} from "../Controllers/studentController.js";

const router = express.Router();

router.post("/create", createStudent);

router.get("/getStudents", getStudents);

router.put("/update/:studentId", updateStudent);

router.delete("/delete/:studentId", deleteStudent);

export default router;
