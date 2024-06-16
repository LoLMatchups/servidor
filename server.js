import express from "express";
import { PORT } from "./src/config/config.js";

const app = express();

app.get("/", (request, response) => {
  response.send("Hey");
});

import championsRouter from "./src/routes/index.js";

const routes = [
  { path: "/v1", router: championsRouter },
];

routes.forEach(route => {
  app.use(route.path, route.router);
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
