const express = require('express');

var app = express();

app.use((req, res, next) => {
	console.log("request", req.method, req.path);
	next();
});

app.use((req, res) => {
	res.status(200).send("hello!");
})

app.listen(8080, (err) => {
	console.log("app running and listening on 8080", err);
})