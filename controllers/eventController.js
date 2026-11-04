import events from "../data/events.js";

export const getEvents = (req, res) => {
  res.json(events);
};

export const getEventById = (req, res) => {
  const requestedId = parseInt(req.params.id, 10);
  const event = events.find((e) => e.id === requestedId);

  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }

  res.json(event);
};
