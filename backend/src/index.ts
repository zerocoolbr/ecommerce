import "reflect-metadata"
import express, { Request, Response } from 'express'
import { usersRouter } from "./users/users.routes"
import { database } from "./db"
import { productsRouter } from "./products/products.routes"
import { authRouter } from "./auth/auth.routes"

const app = express()
const port = 3000

app.use(express.json())
app.use(productsRouter)
app.use(usersRouter)
app.use(authRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  database.initialize()
    .then(() => {
        console.log('Connected to database')
    })
    .catch((error) => console.log(error))
})
