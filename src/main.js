//import { createPool} from "mysql2/promise";
import { createPool } from "mysql2/promise";
import  express, { text } from "express";
import { config } from "dotenv";

const app = express();

config()
const PORT1= process.env.PORT1 || 3000;
 const USER= process.env.USER;
  const PASSWORD= process.env.PASSWORD;
 const HOST = process.env.HOST;
 const DB = process.env.DB;
 const  PORT = process.env.PORT;

const pool = createPool({
 host:  HOST,
  user:  USER,
  password: PASSWORD,
  port: PORT,
  database: DB,
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

const PORT2 = process.env.PORT1 || 3000;
app.listen(PORT2, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT2}`);
});
