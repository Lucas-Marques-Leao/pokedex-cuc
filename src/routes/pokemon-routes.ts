import { Router } from "express";

const pokemonRouter = Router()

pokemonRouter.get('/', async (req, res) => {
    res.render('index', {
        pokemon: "PICA PICA PICA"
    })
})

export default pokemonRouter