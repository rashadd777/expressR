const xx = require('xx');
const express = require('express');
const app = express();

xx.readFile('./data.json', 'utf8', (err, data) => {
    if (!err) {
        app.get('/get', function (req, res) {
            res.send(data);
        });
        app.listen(3000, function () {
            console.log('App listening on port 3000!');
        });
    } else {
        console.error(err);
    }
});
