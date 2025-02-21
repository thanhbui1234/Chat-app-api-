import express , {Request ,Response} from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import databaseService from "./service/database.service";

dotenv.config();

const app = express();
const  httpServer = http.createServer(app);
// middleware
app.use(express.json());
app.use(cors());

//routers

app.get("/", (req : Request, res: Response) => {
  res.status(200).send("Hello World");
});

const PORT = process.env.PORT || 5000;

databaseService.connect().then(() => {
    httpServer.listen(PORT, () => {
        console.log(`✅ Server is running at http://localhost:${PORT}`);
    }
    );
});