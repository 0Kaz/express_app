import express from "express"
import dotenv from "dotenv"
import router from "./router.js"

const app = express()
dotenv.config()

const PORT = process.env.PORT

app.set("view engine", "ejs")
app.set('views','views')
app.use(router)

app.listen(PORT, ()=> {
  console.log(`You are connected on port ${PORT}`)
})
