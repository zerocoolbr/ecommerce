import "reflect-metadata"
import { DataSource } from "typeorm"
import { Product } from "./products/product.model"
import dotenv from 'dotenv'

dotenv.config();

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

export const database = new DataSource({
    type: "postgres",
    host: PGHOST,
    port: 5432,
    username: PGUSER,
    password: PGPASSWORD,
    database: PGDATABASE,
    entities: [Product],
    synchronize: true,
    logging: false,
    ssl: true,
})
