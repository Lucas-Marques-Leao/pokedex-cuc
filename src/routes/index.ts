import { Router } from "express"
import pokemonRouter from "./pokemon-routes"

const routes = Router()

routes.use('/', pokemonRouter)

export default routes