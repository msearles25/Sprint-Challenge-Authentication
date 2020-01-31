const request = require('supertest');

const jokes = require('../api/server');

describe('jokes-router', function() {
    describe('GET /', function() {
        it('should return JSON', function() {
            return request(jokes)
            .get('/api/jokes')
            .then(res => {
                expect(res.type).toMatch(/json/i)
            })
        })
        it('should return', function() {
            return request(jokes)
                .post('/api/auth/login')
                .send({ username: 'what?', password: 'test' })
                .then(res => {
                    // expect(res.body).toBe('t')
                    const { token } = res.body;
                    return request(jokes)
                    .get('/api/jokes')
                    .set({ authorization: token })
                    .then(res => {
                        expect(res.status).toBe(200)
                    })

                })
        })
    })
})