/* eslint-disable no-unused-vars */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Caption extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.userName =  this.belongsTo(models.User, {
        foreignKey: 'user_name'
      })
      // this.userId = this.belongsTo(models.User, {
      //   foreignKey: 'user_id'
      // })
    }
  }
  Caption.init({
    user_name: DataTypes.STRING,
    body: DataTypes.STRING,
    image_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Caption',
  });
  return Caption;
};





// userName: {
//   type: DataTypes.STRING,
//   references: {
//     model: 'Users',
//     key: 'name'
//   }
// userId: {
//   type: DataTypes.INTEGER,
//   references: 'Users',
//   key: 'id'
// }