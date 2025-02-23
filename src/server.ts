import express , {Request ,Response} from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import databaseService from "./service/database.service";
import messageRoutes from "./routers/message.routes";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
dotenv.config();

const app = express();
const  httpServer = http.createServer(app);
// middleware
app.use(express.json());
app.use(cors());

 const options = {
   definition: {
     openapi: "3.0.0",
     info: {
       title: "Mini Blog API",
       description:
         "API endpoints for a mini blog services documented on swagger pro vip",
       contact: {
         name: "Desmond Obisi",
         email: "info@miniblog.com",
         url: "https://github.com/DesmondSanctity/node-js-swagger",
       },
       version: "1.0.0",
     },
     servers: [
       {
         url: "http://localhost:5000/",
         description: "Local server",
       },
       {
         url: "<your live url here>",
         description: "Live server",
       },
     ],
   },
   // looks for configuration in specified directories
   apis: ["./router/*.js/*.ts"],
 };

const swaggerSpec = swaggerJsdoc(options);

//routers

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/v1/messages", messageRoutes);

const PORT = process.env.PORT || 5000;

databaseService.connect().then(() => {
    httpServer.listen(PORT, () => {
        console.log(`✅ Server is running at http://localhost:${PORT}`);
    }
    );
});