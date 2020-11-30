const Joi = require('joi');
const validateRequest = require('../middleware/validate-request');
const emailService = require('../services/email.service');
const mbtiService = require('../services/mbti.service');
module.exports = mbti = {};

mbti.submitSchema = function (req, res, next) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    question_one: Joi.number().required(),
    question_two: Joi.number().required(),
    question_three: Joi.number().required(),
    question_four: Joi.number().required(),
    question_five: Joi.number().required(),
    question_six: Joi.number().required(),
    question_seven: Joi.number().required(),
    question_eight: Joi.number().required(),
    question_nine: Joi.number().required(),
    question_ten: Joi.number().required()
  });
  validateRequest(req, next, schema);
}

mbti.submit = async function (req, res) {
  try {
    const email = await emailService.create(req.body.email);
    delete req.body.email;
    const testResult = await mbtiService.process(req.body);
    await mbtiService.save(email, req.body, testResult)
    return res.json({email, testResult});
  } catch (error) {
    res.status(422).send(error);
  }
}
