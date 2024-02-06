const express = require('express')
var cors = require('cors')

const app = express()
const port = 3002
const names = ['whatever', 'fuck', 'whitepower', 'noname', 'steven2000'];
const mails = ['wirklich@wirklich.de', 'steven.valyi@openpetition.net'];

app.use(cors())

app.get('/', (req, res) => {
    var response = {
        error: true,
        errorMessage: ''
    };
    console.log('keks');

    if (names.includes(req.query.name)) {
        response.errorMessage = 'Name vergeben oder nicht erlaubt'
    }
    if (response.errorMessage.length == 0)
    {
        response.error = false;
    }
    res.json(response);
})

app.post('/registerformsend', function(req, res) {
    console.log('receiving data ...');
    console.log('body is ',req.body);
    res.send(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
