import mongoose, { Document, Schema } from 'mongoose';

interface IHotel extends Document {
  name: string;
  location: string;
  description: string;
  starRating: number;
  amenities: string[];
  image: string;
  pricePerNight: number;
}

const hotelSchema = new Schema<IHotel>({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  starRating: { type: Number, required: true, min: 1, max: 5 },
  amenities: [String],
  image: { type: String, required: true },
  pricePerNight: { type: Number, required: true },
});

const Hotel = mongoose.model<IHotel>('Hotel', hotelSchema);

export default Hotel;