const mongoose = require("mongoose");

const leaveRequestSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    required: true
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  reason: {
    type: String
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("LeaveRequest", leaveRequestSchema);
