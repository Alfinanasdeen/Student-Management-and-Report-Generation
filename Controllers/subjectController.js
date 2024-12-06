import Subject from "../Models/subject.js";

export const createSubject = async (req, res) => {
    try {
        const subject = new Subject(req.body);
        await subject.save();
        res.status(201).json({ message: "Subject created successfully", data: subject });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find();
        res.status(200).json({ message: "Subjects fetched successfully", data: subjects });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateSubject = async (req, res) => {
    try {
        const { subjectId } = req.params;
        const updatedSubject = await Subject.findByIdAndUpdate(subjectId, req.body, { new: true });
        res.status(200).json({ message: "Subject updated successfully", data: updatedSubject });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteSubject = async (req, res) => {
    try {
        const { subjectId } = req.params;
        await Subject.findByIdAndDelete(subjectId);
        res.status(200).json({ message: "Subject deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};