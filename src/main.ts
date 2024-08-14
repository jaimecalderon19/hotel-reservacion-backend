import express from "express";
import cors from "cors"
import {connect} from "mongoose"
import authRoutes from "./routes/authRoutes"
import hotelRoutes from "./routes/hotelroutes"
import reservationRoutes from "./routes/reservationRoutes"
import reviewRoutes from "./routes/reviewRoutes"
import { agregarHoteles } from "./migration/hotelMigration";

const app = express();
const port = process.env.PORT || 8000;
app.use(cors())
app.use(express.json())
app.use("/api/auth",authRoutes);
app.use('/api/hotels', hotelRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/reviews', reviewRoutes);

agregarHoteles();

const mongUri = process.env.MONGO_URI ?? ''
const mongDatabase = process.env.DATABASE ?? 'LinkTIC'

connect(mongUri, {dbName:mongDatabase})


app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});