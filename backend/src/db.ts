import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./users/user.model"
import dotenv from 'dotenv'
import { Product } from "./products/product.model";
import { AlterPasswordType1696790917511 } from "./migrations/1696790917511-alter-password-type";

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
    migrations: [AlterPasswordType1696790917511]
})
