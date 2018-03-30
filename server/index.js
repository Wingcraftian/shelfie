const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const control = require("./controller");
const massive = require("massive");
require('dotenv').config();
const cors = require('cors');

app.use( bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING).then(dbinstance => app.set('db', dbInstance));

app.get('/api/products', control.getAll);
app.post('api/product', control.create);



const port = process.env.PORT || 3001;
app.listen(port, ()=> console.log (`listening on: ${port}`));