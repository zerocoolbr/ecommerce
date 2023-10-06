import "reflect-metadata"
import express, { Request, Response } from 'express'
import { productsRouter } from './products/products.routes'
import { database } from "./db"

const app = express()
const port = 3000

app.use(express.json())
app.use(productsRouter)

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
