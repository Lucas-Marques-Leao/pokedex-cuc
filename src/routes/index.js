import { Router } from "express";
import pokemonRouter from "./pokemon-routes";

const routes = Router();

routes.get("/", async (req, res) => {
  res.render("index", {
    pokemon: "PICAS",
  });
});
routes.use("/pokemon", pokemonRouter);

export default routes;
