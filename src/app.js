
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import mediaRoutes from "./routes/media.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/api/media", mediaRoutes);

app.use(errorHandler);

export default app;