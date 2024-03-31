//import { createPool} from "mysql2/promise";
import { createPool } from "mysql2/promise";
import  express, { text } from "express";

const app = express();

const pool = createPool({
  host: "viaduct.proxy.rlwy.net",
  user: "root",
  password: "kEYnelPIORHxzTJSfcazoysazsFLDjrV",
  port: 32717,
  database: "railway",
});

app.get("/", async (req, res) => {
  try {
    const [rows]= await pool.query('SELECT * FROM test')
    res.send({rows})
   console.log("working")
  } catch (error) {
    console.error("Error al obtener datos de la base de datos:", error);
    res.status(500).json({ error: "Error al obtener datos de la base de datos" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
