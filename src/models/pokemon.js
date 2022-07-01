import { Schema, model } from "mongoose";

const pokemonSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const Pokemon = model("Pokemon", pokemonSchema);

export default Pokemon;
