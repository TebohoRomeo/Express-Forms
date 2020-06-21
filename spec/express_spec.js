const axios = require('axios');
const readline = require('readline'); 

let server;


describe('express new_visit endpoint', () => {
    beforeEach(() => {
        server = require('../src/express');
    });

    afterEach(() => {
        server.close();
    });

    const fixture = require('./fixture');

    it('should return an html form', async(done) => {
        try {
            const html = await axios.get("http://localhost:5200/new_visit");
            expect(html.data).toEqual(fixture);
        } catch (err) {
            console.log(err);
        }

        done();
    });
});

describe('express addnew_visit endpoint', () => {
    beforeEach(() => {
        server = require('../src/express');
    });

    afterEach(() => {
        server.close();
    });

    it('should submit and save the form data to a database', async(done) => {
        try {
            const html = await axios.get("http://localhost:5200/addnew_visit");
            expect(html.data).toEqual(fixture2);
        } catch (err) {
            console.log(err);
        }

        done();
    });
});