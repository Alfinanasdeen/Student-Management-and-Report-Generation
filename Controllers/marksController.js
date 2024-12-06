import Marks from "../Models/marks.js";

export const createMarks = async (req, res) => {
    try {
        const marks = new Marks(req.body);
        await marks.save();
        res.status(201).json({ message: "Marks created successfully", data: marks });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getMarks = async (req, res) => {
    try {
        const marks = await Marks.find().populate("student", "name").populate("subject", "name");
        res.status(200).json({ message: "Marks fetched successfully", data: marks });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateMarks = async (req, res) => {
    try {
        const { marksId } = req.params;
        const updatedMarks = await Marks.findByIdAndUpdate(marksId, req.body, { new: true });
        res.status(200).json({ message: "Marks updated successfully", data: updatedMarks });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteMarks = async (req, res) => {
    try {
        const { marksId } = req.params;
        await Marks.findByIdAndDelete(marksId);
        res.status(200).json({ message: "Marks deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};