'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class title extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  title.init({
    name: DataTypes.STRING,
    author_name: DataTypes.STRING,
    publisher: DataTypes.STRING,
    genre: DataTypes.STRING,
    pages: DataTypes.STRING,
    images: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'title',
    timestamps:false,
    tableName: 'titles'
  });
  return title;
};