import { createConnection } from "mysql2/promise"
import dotenv from "dotenv"
dotenv.config()
const { MYSQL_PORT, MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env
export const pool = createConnection({
    port: MYSQL_PORT,
    host: MYSQL_HOST,
    database: MYSQL_DATABASE,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD
})