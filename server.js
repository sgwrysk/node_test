const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
//app.use(express.static(__dirname + "/dist/"));
app.use(express.static('public')); //

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
app.listen(port);
