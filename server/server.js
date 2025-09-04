import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/portfolioRoute.js";

//dotenv configuartion
dotenv.config();

//rest object
const app = express();

//midlewares
const allowed = process.env.CLIENT_URL || "http://localhost:5173";
app.use(cors({ origin: allowed }));
app.use(express.json());

//routes
app.use("/api/v1/portfolio", router);

//port
const PORT = process.env.PORT || 3000;

//listen
app.listen(PORT, () => {
  console.log(`Server Runnning On PORT ${PORT} `);
});
