const mongoose = require("mongoose");
// Schema for blacklisting JWT tokens with TTL for 24 hours
const blacklistTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400, // 24 hours in seconds
  },
});

module.exports = mongoose.model("BlacklistToken", blacklistTokenSchema);
