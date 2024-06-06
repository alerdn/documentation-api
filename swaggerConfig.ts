const swaggerJSDoc = require("swagger-jsdoc");
const { writeFileSync } = require("fs");
const { resolve } = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Minha API AdonisJS",
      version: "1.0.0",
    },
  },
  apis: ["./app/**/*.ts"], // Caminho para os arquivos que contêm anotações JSDoc
};

const swaggerSpec = swaggerJSDoc(options);

const outputPath = resolve(__dirname, "swagger.json");
writeFileSync(outputPath, JSON.stringify(swaggerSpec, null, 2));

console.log(`Swagger JSON file generated at ${outputPath}`);