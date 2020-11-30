'use strict';
module.exports = (sequelize, DataTypes) => {
  var Email = sequelize.define('Email', {
    email: DataTypes.STRING
  }, {});
  Email.associate = function(models) {
    Email.hasMany(models.Mbti);
  };
  return Email;
};