'use strict';
module.exports = (sequelize, DataTypes) => {
  const Threads = sequelize.define('Threads', {
    sender_id: DataTypes.INTEGER,
    recipient_id: DataTypes.INTEGER,
    message_id: DataTypes.INTEGER
  }, {});
  Threads.associate = function(models) {
    // associations can be defined here
  };
  return Threads;
};