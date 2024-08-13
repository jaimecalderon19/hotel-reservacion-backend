import express from "express";
import cors from "cors"
import {connect} from "mongoose"
import authRoutes from "./routes/authRoutes"

const app = express();
const port = process.env.PORT || 8000;
app.use(cors())
app.use(express.json())
app.use("/api/auth",authRoutes);


const mongUri = process.env.MONGO_URI ?? ''
const mongDatabase = process.env.DATABASE ?? 'LinkTIC'

connect(mongUri, {dbName:mongDatabase})


app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});