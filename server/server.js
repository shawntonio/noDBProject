const express = require('express');
const app = express();

const port = 4040;

app.use(express.json());



app.listen(port, () => console.log('listening on port ', port))
