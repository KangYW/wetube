import mongoose from "mongoose";
import passportLM from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  facebokkId: Number,
  githubId: Number
});

UserSchema.plugin(passportLM, { usernameField: "email" });

const model = mongoose.model("User", UserSchema);

export default model;
