const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Books API',
        description: 'API for managing books and authors'
    },
    host: 'cse341-project2-ohmp.onrender.com',
    schemes: ['https']
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
