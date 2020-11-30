const express = require('express');
const mbtiController = require('../controllers/mbti.controller');

const router = express.Router();

//= ===============================
// API routes
//= ===============================
router.post('/submit', mbtiController.submitSchema, mbtiController.submit);



module.exports = router;
