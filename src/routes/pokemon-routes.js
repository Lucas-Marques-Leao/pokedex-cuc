import { Router } from "express";
import Pokemon from "../models/pokemon";

const pokemonRouter = Router();

pokemonRouter.get("/", async (req, res) => {
  const pokemon = await Pokemon.find();

  return res.json(pokemon);
});

pokemonRouter.post("/", async (req, res) => {
  const data = req.body;
  try {
    const pokemon = await Pokemon.create(data);
    return res.send(pokemon);
  } catch (err) {
    console.log(err);
  }
});

export default pokemonRouter;
