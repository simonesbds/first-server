import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    storeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Store",
      required: true,
    },
    date: { type: Date, required: true },
    venue: { type: String, trim: true },
  },
  { timestamps: true },
);

const Event = mongoose.model("Event", eventSchema);

export default Event;
