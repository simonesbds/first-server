import mongoose from "mongoose";
import Event from "../models/Event.js";

export const getEvents = async (req, res) => {
  try {
    const { title } = req.query;
    const query = {};

    if (typeof title === "string" && title.trim()) {
      query.title = {
        $regex: title.trim(),
        $options: "i",
      };
    }

    const events = await Event.find(query).sort({ date: 1 });

    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getEventById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid Event ID format" });
    }

    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
