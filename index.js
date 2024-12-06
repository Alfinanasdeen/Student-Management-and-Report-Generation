import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./Database/Config.js";
import studentRoute from "./Routes/studentRoute.js";
import subjectRoute from "./Routes/subjectRoute.js";
import marksRoute from "./Routes/marksRoute.js";
import reportRoute from "./Routes/reportRoute.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDb();

app.get("/", (req, res) => {
  res.send("Welcome to the Student Management & Report Generation API! 🚀");
});

app.use("/api/student", studentRoute);
app.use("/api/subject", subjectRoute);
app.use("/api/marks", marksRoute);
app.use("/api/report", reportRoute);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`app started in port ${port}`);
});
