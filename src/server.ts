import express , {Request ,Response} from "express";
import http from "http"; 
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import { database } from "./config/database";
import swaggerDocs from "./docs/swagger";
import Routers from './routers/index';
dotenv.config();

const app = express();
const  httpServer = http.createServer(app);
// middleware
app.use(express.json());
app.use(cors());
app.use(morgan(""));

app.use('/api',Routers);
//routers

const PORT = process.env.PORT || 5000;

database.connect().then(()=>{
  httpServer.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });

  swaggerDocs(app, PORT as number);
})