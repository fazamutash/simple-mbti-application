'use strict';
module.exports = (sequelize, DataTypes) => {
  var Mbti = sequelize.define('Mbti', {
    emailId: { allowNull: false, type: DataTypes.INTEGER, references: { model: "Emails", key: "id" } },
    questionOne: { type: DataTypes.INTEGER, allowNull: false },
    questionTwo: { type: DataTypes.INTEGER, allowNull: false },
    questionThree: { type: DataTypes.INTEGER, allowNull: false },
    questionFour: { type: DataTypes.INTEGER, allowNull: false },
    questionFive: { type: DataTypes.INTEGER, allowNull: false },
    questionSix: { type: DataTypes.INTEGER, allowNull: false },
    questionSeven: { type: DataTypes.INTEGER, allowNull: false },
    questionEight: { type: DataTypes.INTEGER, allowNull: false },
    questionNine: { type: DataTypes.INTEGER, allowNull: false },
    questionTen: { type: DataTypes.INTEGER, allowNull: false },
    result: { type: DataTypes.STRING }
  }, {});
  Mbti.associate = function(models) {
    Mbti.belongsTo(models.Email);
  };
  return Mbti;
};