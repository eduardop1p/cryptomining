import mongoose, { Schema, model } from 'mongoose';

const usersSchema = new Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
  createIn: { type: Date, default: Date.now },
});

export const usersModel = mongoose.models.Users || model('Users', usersSchema);
