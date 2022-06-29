import { Schema, model } from "mongoose"
import IPokemon from "../interfaces/IPokemon";

const pokemonSchema = new Schema<IPokemon>({
    name: { type: String, required: true},
    description: { type: String, required: true},
    evolutions: Array<String>
})

const Pokemon = model('Pokemon', pokemonSchema);

export default Pokemon;