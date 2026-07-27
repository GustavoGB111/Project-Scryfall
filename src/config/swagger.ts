import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Scryfall Project",
      version: "1.0.0",
      description: "Documentação da API gerada com Swagger",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./dist/app/module/**/controllers/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
