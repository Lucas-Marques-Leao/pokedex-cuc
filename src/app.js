import express from "express";
import routes from "./routes";
import { engine } from "express-handlebars";
import path from "path";

const app = express();

app.set("views", path.join(__dirname, "resources", "views"));
app.engine(
  "hbs",
  engine({
    defaultLayout: "main",
    extname: ".hbs",
    layoutsDir: path.join(__dirname, "../src/resources/views/layouts"),
    partialsDir: path.join(__dirname, "../src/resources/views"),
  })
);
app.set("view engine", "hbs");

app.use(routes);

export default app;
