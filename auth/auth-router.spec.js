const request = require('supertest');

const auth = require('../api/server');
const db = require('../database/dbConfig');

describe('auth-router', function() {
    // beforeEach(async () => {
    //     await db('users').truncate();
    // })
    describe.skip('POST /register', function() {
        
        it('should register a new user and return a 201 Created', function() {
            
            return request(auth)
            .post('/api/auth/register')
            .send({ username: 'what?', password: 'test' })
            .expect('Content-type', /json/)
            .then(res => {
                expect(res.status).toBe(201);
            })
            
        }) 
        
        it('should return the username that was registered', function() {
            return request(auth)
                .post('/api/auth/register')
                .send({ username: 'this is a username', password: 'password'})
                .expect('Content-type', /json/)
                .then(res => {
                     expect(res.body.username).toBe('this is a username')
            })
        })

    })
    describe('POST /login', function() {
        it('should log the user in', function() {
            return request(auth)
                .post('/api/auth/login')
                .send({ username: 'what?', password: 'test' })
                .expect('Content-type', /json/)
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })
        it('should say successful login', function() {
            return request(auth)
                .post('/api/auth/login')
                .send({ username: 'what?', password: 'test' })
                .expect('Content-type', /json/)
                .then(res => {
                    expect(res.body.message).toBe('Successfully logged in.')
                })
        })
    })
})