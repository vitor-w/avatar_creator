const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());


app.post('/characteristics', (req, res) => {
    console.log('I got a request!');
    console.log(req.body);
    res.json({
        status: 'success',
        characteristics: req.body
    });
});

app.listen(3000);