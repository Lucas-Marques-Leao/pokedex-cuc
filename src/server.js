import app from "./app";
import "dotenv/config";
import "./database";

app.listen(Number(process.env.APP_PORT), () => {
  console.log("App Started");
});
