import mongoose, { Document, Schema } from 'mongoose';

// Interfaz para representar un usuario
export interface IUser extends Document {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role: 'guest' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

// Schema de usuario
const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['guest', 'admin'],
    default: 'guest',
  },
}, {
  timestamps: true,
});

// Crear y exportar el modelo
const User = mongoose.model<IUser>('User', userSchema);

export default User;