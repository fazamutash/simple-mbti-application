'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Mbtis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      emailId: { allowNull: false, type: Sequelize.INTEGER, references: { model: "Emails", key: "id" } },
      questionOne: { type: Sequelize.INTEGER, allowNull: false },
      questionTwo: { type: Sequelize.INTEGER, allowNull: false },
      questionThree: { type: Sequelize.INTEGER, allowNull: false },
      questionFour: { type: Sequelize.INTEGER, allowNull: false },
      questionFive: { type: Sequelize.INTEGER, allowNull: false },
      questionSix: { type: Sequelize.INTEGER, allowNull: false },
      questionSeven: { type: Sequelize.INTEGER, allowNull: false },
      questionEight: { type: Sequelize.INTEGER, allowNull: false },
      questionNine: { type: Sequelize.INTEGER, allowNull: false },
      questionTen: { type: Sequelize.INTEGER, allowNull: false },
      result: { type: Sequelize.STRING },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Mbtis');
  }
};