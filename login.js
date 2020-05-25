const express = require('express');

    const app = express();

    app.get('/', (require, response) => {
        response.send('Ola');
    });

    app.listen(3333);