const Mbti = require("../models").Mbti;

const aggregate =  {
  eiValue: 0, 
  snValue: 0, 
  tfValue: 0, 
  jpValue: 0 
};
const mbtiMapping = Object.freeze({
  question_one: { dimension: 'ei', isReversed: false },
  question_two: { dimension: 'sn', isReversed: true },
  question_three: { dimension: 'tf', isReversed: false },
  question_four: { dimension: 'ei', isReversed: true },
  question_five: { dimension: 'sn', isReversed: false },
  question_six: { dimension: 'jp', isReversed: false },
  question_seven: { dimension: 'tf', isReversed: true },
  question_eight: { dimension: 'jp', isReversed: true },
  question_nine: { dimension: 'ei', isReversed: true },
  question_ten: { dimension: 'jp', isReversed: false }
});

module.exports = {
  process,
  save,
  getByEmail
};

function process(datas) {
  aggregate.eiValue = 0;
  aggregate.snValue = 0;
  aggregate.tfValue = 0;
  aggregate.jpValue = 0;
  for (let data in datas) {
    calc(mbtiMapping[data].dimension, datas[data], mbtiMapping[data].isReversed);
  }
  return testResult();
}

function calc(dimension, value, isReversed) {
  value -= 4;
  aggregate[dimension+"Value"]  += (isReversed ? (value * -1) : value);
}

function testResult() {
  let result = '';
  if (aggregate.eiValue <= 0 ) {
    result += 'E';
  } else {
    result += 'I';
  }

  if (aggregate.snValue <= 0 ) {
    result += 'S';
  } else {
    result += 'N';
  }

  if (aggregate.tfValue <= 0 ) {
    result += 'T';
  } else {
    result += 'F';
  }

  if (aggregate.jpValue <= 0 ) {
    result += 'J';
  } else {
    result += 'P';
  }

  return result;
}

async function save(email, data, result) {
  console.log(email.id)
  const mbti = new Mbti({
    emailId: email.id,
    questionOne: data.question_one,
    questionTwo: data.question_two,
    questionThree: data.question_three,
    questionFour: data.question_four,
    questionFive: data.question_five,
    questionSix: data.question_six,
    questionSeven: data.question_seven,
    questionEight: data.question_eight,
    questionNine: data.question_nine,
    questionTen: data.question_ten,
    result: result
  });
  await mbti.save();
  return mbti;
}

async function getByEmail(email) {
  return await Mbti.findAll({ where: { emailId: email.id } });
}