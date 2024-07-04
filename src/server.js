import app from "./app.js"
import dotenv from 'dotenv';
import http from "http"

dotenv.config();

const { APP_PORT } = process.env;

const port = APP_PORT || 3001

const server = http.createServer(app);

app.listen(port, () => {
    console.log("Server running on port: " + port);
})