require('dotenv').config();

const Client = require("pg").Client;
const client = new Client();

client.connect()

const addNewVisitor = async (visitor_name, visitor_age, date_of_visit, time_of_visit, assistant, comments) => {

	const sql = `
		INSERT 
		INTO visitors 
		(name, age, date_of_visit, time_of_visit, assistant, comments) 
		VALUES ($1, $2, $3, $4, $5, $6) RETURNING *
	`;
	
	const data = [visitor_name, visitor_age, date_of_visit, time_of_visit, assistant, comments];

	const res = await client.query(sql, data);
	
	// Results
	return res.rows
}

module.exports = addNewVisitor;