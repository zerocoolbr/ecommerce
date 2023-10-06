import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./users/user.model"
import dotenv from 'dotenv'
import { Product } from "./products/product.model";

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

export const database = new DataSource({
    type: "postgres",
    host: PGHOST,
    port: 5432,
    username: PGUSER,
    password: PGPASSWORD,
    database: PGDATABASE,
    entities: [Product, User],
    synchronize: true,
    logging: false,
    ssl: true,
})
