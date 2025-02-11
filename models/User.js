import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  streak: { type: Number, default: 0 },
  points: { type: Number, default: 0 },
  profilePicture: { type: String, default: "/assets/images/profile/default-profile.png" },
  gender: { type: String, enum: ["male", "female", "other"] },
  
});

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
