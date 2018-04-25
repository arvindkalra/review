const express = require('express');
const app = express();

app.use('/', express.static('public_static'));

app.listen(3000, function () {
   console.log("Server Listening at 3000");
});