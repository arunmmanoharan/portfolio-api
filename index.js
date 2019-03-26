const express = require('express');
const compression = require('compression');

var app = express();
app.use(compression());

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/', async (req, res) => {
	try {
		const resumeJson = await require('./resume.json');
		res.send(resumeJson);
	} catch (e) {
		res.send(400);
	}
});

const server = app.listen(process.env.PORT || 3555, () => {
	const port = server.address().port;
	console.log("App now running on port", port);
});


