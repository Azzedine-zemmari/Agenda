const express = require('express')
const mydb = require("./config/db")
const rout = require("./routers/router")
const path = require("path")
const port = 3000
const app = express()

app.use(express.static(path.join(__dirname, '')));
app.use(express.json())
app.use(rout)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.listen(port, () => console.log(`Example app listening at http://localhost:3000`))   