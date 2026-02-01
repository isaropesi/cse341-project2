const dotenv = require('dotenv');
dotenv.config();

const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const doc = {
    info: {
        title: 'Books API',
        description: 'API for managing books and authors'
    },
    servers: [
        {
            url: 'http://localhost:8080',
            description: 'Localhost'
        },
        {
            url: 'https://cse341-project2-ohmp.onrender.com',
            description: 'Production'
        }
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer'
            }
        }
    }
};



const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
