"use strict";

const timestamp = new Date();

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Emails",
      [
        {
          email: "test@seed.com",
          createdAt: timestamp,
          updatedAt: timestamp,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Emails", null, {});
  },
};
