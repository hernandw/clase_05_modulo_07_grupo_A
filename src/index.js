import express from "express";
import exphbs from "express-handlebars";
import courseRouter from "./routes/courseRoutes.js";
import db from "./config/db.js";
import path from "path";


const __dirname = path.resolve();

const app = express();

const PORT = process.env.PORT || 3005;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static public
app.use(express.static(path.join(__dirname, "src/public")));

//Sincronización de la BBDD
const connectDB = async () => {
    try {
        await db.sync()
        console.log("✅ Base de datos sincronizada")
    } catch (error) {
        console.error("❌ Error General ", error)
    }
};
connectDB()

//configuración de HBS
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));

app.engine(
  "hbs",
  exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "src/views/layouts"),
    extname: ".hbs",
  }),
);

//Rutas
app.use("/", courseRouter);

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto http://localhost:${PORT}`);
});
