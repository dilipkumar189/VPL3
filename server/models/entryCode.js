const mongoose = require("mongoose");

const teamEntryCodeSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
    },
    village: {
      type: String,
      required: true,
    },
    used: {
      type: Boolean,
      default: false,
    },
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      default: null,
    },
  },
  { timestamps: true }
);

const EntryCode = mongoose.model("team_entry_code", teamEntryCodeSchema);
module.exports = EntryCode;
