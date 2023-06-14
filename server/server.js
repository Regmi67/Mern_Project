import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/mongoose-config.js";
import shopRouter from "./routes/shop-routes.js";
import cors from "cors";

const app = express();
dotenv.config();

app.use(express.json(), cors());
app.use("/api/shops", shopRouter);

async function serverStart() {
  try {
    dbConnect();
    const PORT = process.env.PORT;
    app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
  } catch (err) {
    console.log(err);
  }
}

serverStart();
