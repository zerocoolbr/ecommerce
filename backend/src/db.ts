import "reflect-metadata"
import { DataSource } from "typeorm"
import dotenv from 'dotenv'
import { User } from "./users/user.model"
import { Product } from "./products/product.model";
import { AlterPasswordType1696790917511 } from "./migrations/1696790917511-alter-password-type";
import { AddUniqueConstraintOnUserEmail1696874415519 } from "./migrations/1696874415519-AddUniqueConstraintOnUserEmail";
import { Address } from "./addresses/address.model";
import { AddAdressTable1696877796952 } from "./migrations/1696877796952-AddAdressTable";

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

export const database = new DataSource({
    type: "postgres",
    host: PGHOST,
    port: 5432,
    username: PGUSER,
    password: PGPASSWORD,
    database: PGDATABASE,
    entities: [Product, User, Address],
    synchronize: true,
    logging: false,
    ssl: true,
    migrations: [AlterPasswordType1696790917511, AddUniqueConstraintOnUserEmail1696874415519, AddAdressTable1696877796952]
})
