const request = require('supertest');

const jokes = require('../api/server');

describe.skip('jokes-router', function() {
    describe('GET /', function() {
        it('should return 200 OK', function() {
            return request(jokes)
            .post()
                .get('/api/jokes')
                .then(res => {
                    expect(res.status).toBe(200)
            })
        })
    })
})