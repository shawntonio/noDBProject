const express = require('express');
const cors = require('cors');

const app = express();
const port = 4040;
const EventsCtrl = require('./controllers/Events')

app.use(express.json());
app.use(cors());

app.get('/api/events', EventsCtrl.read)
app.post('/api/events', EventsCtrl.create)
app.put('/api/events/:id', EventsCtrl.update)
app.delete('/api/events/:id', EventsCtrl.delete)

app.listen(port, () => console.log('listening on port ', port))

