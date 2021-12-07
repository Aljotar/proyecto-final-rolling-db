/* eslint-disable no-undef */
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'https://hulkstore-server.herokuapp.com/api';

//Test get products

describe('Products', () => {
    it('should return all products', (done) => {
        chai.request(url)
            .get('/productos')
            .end((err, res) => {
                expect(res.body).to.be.a('array');
                expect(res.body.length).to.be.above(0);
                done();
            });
    });
});

describe('Users', () => {
    it('Should register a new user', (done) => {
        chai.request(url)
            .post('/auth/register')
            .send({
                name: 'testName',
                lastName: 'testLastName',
                email: 'testEmail@mail.com',
                birthday: '2000-01-01',
                password: '123456',
            })
            .end((err, res) => {
                expect(res.text).to.be.a('string');
                expect(res.text).to.equal('Usuario Creado Correctamente');
                done();
            });
    });
});
