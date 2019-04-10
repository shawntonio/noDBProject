const express = require('express');

const app = express();
const port = 4040;
const EventsCtrl = require('./controllers/Events')

app.use(express.json());

app.get('/api/events', EventsCtrl.read)

app.listen(port, () => console.log('listening on port ', port))
