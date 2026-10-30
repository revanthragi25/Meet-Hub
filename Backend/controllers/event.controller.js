const Event = require("../models/Event");

const createEvent = async (req, res) => {
  const { eventName, category, date, capacity } = req.body || {};

  if (
    typeof eventName !== "string" ||
    !eventName.trim() ||
    typeof category !== "string" ||
    !category.trim() ||
    !date ||
    capacity === undefined
  ) {
    return res.status(400).json({
      message: "Event name, category, date and capacity are required",
    });
  }

  try {
    const event = await Event.create({
      eventName: eventName.trim(),
      category: category.trim(),
      date,
      capacity,
    });

    return res.status(201).json({
      message: "Event created successfully",
      event,
    });
  } catch (error) {
    if (error.name === "ValidationError" || error.name === "CastError") {
      return res.status(400).json({
        message: error.message,
      });
    }

    console.error("Event creation failed:", error.message);
    return res.status(500).json({
      message: "Event creation failed",
    });
  }
};

module.exports = { createEvent };
