import { Router } from "express";

const pokemonRouter = Router()

pokemonRouter.get('/', async (req, res) => {
    return res.json({
        "Hello": "World"
    })
})

export default pokemonRouter