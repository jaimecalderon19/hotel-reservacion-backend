import mongoose, { Document, Schema } from 'mongoose';

interface IReservation extends Document {
  user: mongoose.Types.ObjectId;
  hotel: mongoose.Types.ObjectId;
  checkInDate: Date;
  checkOutDate: Date;
  numberOfGuests: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
}

const reservationSchema = new Schema<IReservation>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  hotel: { type: Schema.Types.ObjectId, ref: 'Hotel', required: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  numberOfGuests: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
}, {
  timestamps: true
});

const Reservation = mongoose.model<IReservation>('Reservation', reservationSchema);

export default Reservation;