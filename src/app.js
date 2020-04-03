const express = require('express');
const path = require('path');

//
const addNewVisitor = require('./database');

// Create app
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use('/new_visit', express.static('form'));

// Template engine
app.set('view engine', 'pug');

// Home
app.get('/new_visit', (req, res) => {
	return res.sendFile(`index.html`);
});

// Submit form
app.post('/new_visit', async (req, res) => {

	// Inputs
	let name 		= req.body.name;
	let age 		= req.body.age;
	let date 		= req.body.date;
	let time 		= req.body.time;
	let assistant 	= req.body.assistant;
	let comments 	= req.body.comments;


	// Save visitor
	const visitor = await addNewVisitor(name, age, date, time, assistant, comments);

	return res.render('success', { data: visitor[0] });
});

const server = app.listen(3232, () => console.log('Express listening to this Port: 3232'));

module.exports = server;