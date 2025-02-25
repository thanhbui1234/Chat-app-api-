import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import {Request ,Response} from "express";
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: 'Node.js Socket.IO API',
      description:
        "API endpoints for a mini blog services documented on swagger",
      contact: {
        name: "Chi Thanh",
        email: "miktenthanh@gmail.com",
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
  apis: ["./src/routers/*.ts"],
};
const swaggerSpec = swaggerJsdoc(options);
function swaggerDocs(app : any, port : number) {
  // Swagger Page
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // Documentation in JSON format
  app.get("/docs.json", (req :Request , res :Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
}
export default swaggerDocs;
