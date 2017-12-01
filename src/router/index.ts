import { Router } from "express";
const index: Router = Router()


index.get('/', (req, res, nex) => {
    res.send("Hola index 10")
})

export default index
