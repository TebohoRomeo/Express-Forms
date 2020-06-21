describe("Testing express end points", () => {

	const axios = require('axios');
	const readline = require('readline');

	const form = require('./forms');
	const success = require('./form_succeess');

	it('Should render form', async () => {
		const res = await axios.get('http://127.0.0.1:3232/new_visit');

		expect(res.data).toEqual(form);
	});

	it('Should show the form', async () => {

		const visitor = {
			name: 'Thabo Mayika',
			age: 22,
			date: '11/09/2019',
			time: '12:00:00',
			assistant: 'Romeo',
			comments: 'No Comment'
		}

		const res = await axios.post('http://127.0.0.1:3232/new_visit', visitor);

		// let id = res.data.match(/\d+/g)[2];

		expect(res.data).toEqual(success(
				id,
				visitor.name,
				visitor.age,
				visitor.date,
				visitor.time,
				visitor.assistant,
				visitor.comments
			));	
	});

});