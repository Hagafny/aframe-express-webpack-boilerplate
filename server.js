'use strict';

const express = require('express');
const app = express();
const path = require('path');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log(`App listening on port ${app.get('port')}`);
});