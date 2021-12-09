const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    roll_no: { type: "String", required: "true", unique: "true" },
    batch_name: { type: "String", required: "true" },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("student", studentSchema);
