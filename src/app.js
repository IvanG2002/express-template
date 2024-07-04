import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import morgan from "morgan"
import errorHandler from "./middlewares/handleError.js"
import { rateLimit } from "express-rate-limit"

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const app = express()
app.use(limiter);
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.use(cookieParser())

// Routas versionadas
app.get("/check", (req, res) => {
    res.json({ message: "health" })
})
// api/v1

app.use(errorHandler);

export default app