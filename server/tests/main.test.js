const chai = require('chai');
const request = require('request-promise');
const { expect } = require('chai');
const should = chai.should();

const BASE = 'http://node-app:5000';

describe('Mbti test', () => {
  it('Should load seed data', async () => {
    const options = {
      method: 'GET',
      uri: BASE,
    };
    try {
      let res = await request(options)
      res = JSON.parse(res);
      return expect(res.message).to.equal('Database has been seeded with email test@seed.com.');
    } catch (err) {
      should.not.exist(err);
    }
  });

  it('Should not allow submission without data', async () => {
    const options = {
      method: 'POST',
      uri: BASE + '/api/submit'
    };
    try {
      await request(options);
    } catch (err) {
      expect(err.statusCode).to.equal(400);
      const errorData = JSON.parse(err.error);
      expect(errorData.message).to.equal(`Validation error: "email" is required, "question_one" is required, "question_two" is required, "question_three" is required, "question_four" is required, "question_five" is required, "question_six" is required, "question_seven" is required, "question_eight" is required, "question_nine" is required, "question_ten" is required`);
    }
  });

  it('Should not allow submission with wrong email pattern', async () => {
    const options = {
      method: 'POST',
      uri: BASE + '/api/submit',
      form: {
        email: 'wrongpattern'
      }
    };
    try {
      await request(options);
    } catch (err) {
      expect(err.statusCode).to.equal(400);
      const errorData = JSON.parse(err.error);
      expect(errorData.message).to.contain(`Validation error: "email" must be a valid email`)
    }
  });

  it('Should run test case 1', async () => {
    const options = {
      method: 'POST',
      uri: BASE + '/api/submit',
      form: {
        email: 'test@email.com',
        question_one: 4,
        question_two: 3,
        question_three: 1,
        question_four: 6,
        question_five: 7,
        question_six: 3,
        question_seven: 5,
        question_eight: 3,
        question_nine: 6,
        question_ten: 6
      }
    };
    
    try {
      let res = await request(options)
      res = JSON.parse(res);
      expect(res.email.email).to.equal('test@email.com');
      expect(res.testResult).to.equal('ENTP');
    } catch (err) {
      should.not.exist(err);
    }
  });

  it('Should run test case 2', async () => {
    const options = {
      method: 'POST',
      uri: BASE + '/api/submit',
      form: {
        email: 'test@email.com',
        question_one: 1,
        question_two: 5,
        question_three: 4,
        question_four: 6,
        question_five: 5,
        question_six: 2,
        question_seven: 6,
        question_eight: 3,
        question_nine: 3,
        question_ten: 2
      }
    };
    
    try {
      let res = await request(options)
      res = JSON.parse(res);
      expect(res.email.email).to.equal('test@email.com');
      expect(res.testResult).to.equal('ESTJ');
    } catch (err) {
      should.not.exist(err);
    }
  });

  it('Should run test case 3', async () => {
    const options = {
      method: 'POST',
      uri: BASE + '/api/submit',
      form: {
        email: 'test@email.com',
        question_one: 3,
        question_two: 2,
        question_three: 6,
        question_four: 1,
        question_five: 7,
        question_six: 3,
        question_seven: 2,
        question_eight: 5,
        question_nine: 2,
        question_ten: 7
      }
    };
    
    try {
      let res = await request(options)
      res = JSON.parse(res);
      expect(res.email.email).to.equal('test@email.com');
      expect(res.testResult).to.equal('INFP');
    } catch (err) {
      should.not.exist(err);
    }
  });

  it('Should run test case 4', async () => {
    const options = {
      method: 'POST',
      uri: BASE + '/api/submit',
      form: {
        email: 'test@email.com',
        question_one: 3,
        question_two: 4,
        question_three: 7,
        question_four: 1,
        question_five: 2,
        question_six: 5,
        question_seven: 4,
        question_eight: 3,
        question_nine: 2,
        question_ten: 6
      }
    };
    
    try {
      let res = await request(options)
      res = JSON.parse(res);
      expect(res.email.email).to.equal('test@email.com');
      expect(res.testResult).to.equal('ISFP');
    } catch (err) {
      should.not.exist(err);
    }
  });

  it('Should run test case 1', async () => {
    const options = {
      method: 'POST',
      uri: BASE + '/api/submit',
      form: {
        email: 'test@email.com',
        question_one: 4,
        question_two: 4,
        question_three: 4,
        question_four: 4,
        question_five: 4,
        question_six: 4,
        question_seven: 4,
        question_eight: 4,
        question_nine: 4,
        question_ten: 4
      }
    };
    
    try {
      let res = await request(options)
      res = JSON.parse(res);
      expect(res.email.email).to.equal('test@email.com');
      expect(res.testResult).to.equal('ESTJ');
    } catch (err) {
      should.not.exist(err);
    }
  });

  it('Should run test case 1', async () => {
    const options = {
      method: 'POST',
      uri: BASE + '/api/submit',
      form: {
        email: 'test@email.com',
        question_one: 1,
        question_two: 1,
        question_three: 1,
        question_four: 1,
        question_five: 1,
        question_six: 1,
        question_seven: 1,
        question_eight: 1,
        question_nine: 1,
        question_ten: 1
      }
    };
    
    try {
      let res = await request(options)
      res = JSON.parse(res);
      expect(res.email.email).to.equal('test@email.com');
      expect(res.testResult).to.equal('ISTJ');
    } catch (err) {
      should.not.exist(err);
    }
  });

  it('Should run test case 1', async () => {
    const options = {
      method: 'POST',
      uri: BASE + '/api/submit',
      form: {
        email: 'test@email.com',
        question_one: 7,
        question_two: 7,
        question_three: 7,
        question_four: 7,
        question_five: 7,
        question_six: 7,
        question_seven: 7,
        question_eight: 7,
        question_nine: 7,
        question_ten: 7
      }
    };
    
    try {
      let res = await request(options)
      res = JSON.parse(res);
      expect(res.email.email).to.equal('test@email.com');
      expect(res.testResult).to.equal('ESTP');
    } catch (err) {
      should.not.exist(err);
    }
  });
});