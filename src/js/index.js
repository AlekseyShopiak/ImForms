const express = require('express');
const db = require('./config');
const app = express();
const PORT = 3500;

app.use(express.json());
app.use('/api', require('./router'));

db.connect(() => app.listen(PORT, () => console.log(`Server is running on localhost:${PORT}`)));










