const express = require('express');
const compression = require('compression');
import { Request, Response, NextFunction } from 'express';


const app = express();
app.use(compression());

app.use((req:Request, res:Response, next: NextFunction) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/', async (req:Request, res:Response) => {
	try {
		const resumeJson = await require('../resume.json');
		res.send(resumeJson);
	} catch (e) {
		res.sendStatus(400);
	}
});

const server = app.listen(process.env.PORT || 3555, () => {
	const port = server.address().port;
	console.log("App now running on port", port);
});


