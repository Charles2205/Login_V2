import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import routes from "./routes/authRoutes.js";
import expressEjsLayouts from "express-ejs-layouts";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const app = express()
    .use(express.urlencoded({ extended: false }))
    .use(express.json())
    .use(expressEjsLayouts)
    .use(express.static(__dirname +"/public/"))
    .use(helmet())
    .use(morgan('dev'))
    .use("/",routes)
    .set("view engine", "ejs")
    .set('views', __dirname + '/views/')
    .set("layout", "layout/master")
    



   



export default app