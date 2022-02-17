import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { MongoClient } = require("mongodb");
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import usersRoutes from "./routes/users.js";
import coinRoutes from "./routes/coins.js";
import newsRoutes from "./routes/news.js";


const app = express();

app.use(
  bodyParser.json({
    limit: "30mb",
    extended: true,
  })
);
app.use(
  bodyParser.urlencoded({
    limit: "30mb",
    extended: true,
  })
);
app.use(cors());

const PORT = process.env.PORT || 8000;
app.listen(PORT);
app.use("/users", usersRoutes);
app.use("/coins", coinRoutes);
app.use("/news", newsRoutes);
