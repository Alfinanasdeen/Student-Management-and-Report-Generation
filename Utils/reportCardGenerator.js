import Marks from "../Models/marks.js";
import Student from "../Models/student.js";

export const reportCardGenerator = async (req, res) => {
  try {
    const studentId = req.params.id;

    // Check if student exists
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Fetch marks for the student
    const marks = await Marks.find({ student: studentId }).populate(
      "subject",
      "name"
    );
    if (!marks.length) {
      return res.status(404).json({ message: "Marks not found" });
    }

    // Calculate total marks and status
    const totalMarks = marks.reduce((acc, mark) => acc + mark.score, 0);
    const passThreshold = 50; // Example threshold
    const pass = marks.every((mark) => mark.score >= passThreshold);

    // Generate report card
    res.status(200).json({
      message: "Report card generated successfully",
      student: {
        id: student._id,
        name: student.name,
        rollNumber: student.rollNumber,
      },
      subjects: marks.map((mark) => ({
        subject: mark.subject.name,
        score: mark.score,
        maxScore: mark.maxScore,
      })),
      totalMarks,
      status: pass ? "Pass" : "Fail",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
