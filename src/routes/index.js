import Express from "express"
let router = Express.Router()

import userRoutes from './user.js';



router.get("/", (req, res) => {
  res.json({ version: "0.0.3" })
})


// Healthcheck control APIs
router.get("/healthcheck", (req, res) => {
    res.statusCode = 200
    res.send("ok")
})

userRoutes(router);
export default router
