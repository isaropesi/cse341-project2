const dotenv = require('dotenv');
dotenv.config();

const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Books API',
        description: 'API for managing books and authors'
    },
    host: process.env.HOST,
    schemes: ['http', 'https']
};


const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
