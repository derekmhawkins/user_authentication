'use strict';
const bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      }
    }
  });
  return User;
};
