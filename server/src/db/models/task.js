'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Project, { foreignKey: 'projectId' });
    }
  }
  Task.init(
    {
      description: DataTypes.STRING,
      projectId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      finishedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Task',
    }
  );
  return Task;
};
