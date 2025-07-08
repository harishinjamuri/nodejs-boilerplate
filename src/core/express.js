import http from "http";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import CookieParser from "cookie-parser";
import morgan from "morgan";
import {config} from "../config/index.js";
import routes from "../routes/index.js";
// const port = process.env.PORT || 3000;

const init = (app) => {
  app.server = http.createServer(app);
  app.use(morgan("dev"));

  app.use(cors({ exposedHeaders: config.corsHeaders }));
  app.use(CookieParser());
  app.use(
    bodyParser.json({
      limit: config.bodyLimit,
    }),
  );
  // eslint-disable-next-line no-unused-vars
  app.use(function (error, req, res, next) {
    res.status(400).send({ message: "Invalid JSON" });
  });
  app.use("/api/", routes);
};

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

const app = express();
init(app);
export default app;