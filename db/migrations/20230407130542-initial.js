'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      // Users table
      await queryInterface.createTable(
        'Users',
        {
          id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            unique: true,
            primaryKey: true,
          },
          firstName: {
            type: Sequelize.STRING(128),
            allowNull: false,
          },
          lastName: {
            type: Sequelize.STRING(128),
            allowNull: false,
          },
          email: {
            type: Sequelize.STRING(128),
            allowNull: false,
          },
          gender: {
            type: Sequelize.ENUM('male', 'female'),
            allowNull: false,
          },
          birthday: {
            type: Sequelize.DATE,
            allowNull: true,
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          deletedAt: {
            type: Sequelize.DATE,
          },
        },
        { transaction },
      );
      // Tasks table
      await queryInterface.createTable(
        'Tasks',
        {
          id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            unique: true,
            primaryKey: true,
          },
          title: {
            type: Sequelize.STRING(128),
            allowNull: false,
          },
          description: {
            type: Sequelize.STRING(1024),
            allowNull: true,
          },
          estimation: {
            type: Sequelize.STRING(128),
            allowNull: true,
          },
          userId: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
              model: { tableName: 'Users' },
              key: 'id',
            },
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          deletedAt: {
            type: Sequelize.DATE,
          },
        },
        { transaction },
      );
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.dropTable('Tasks', { transaction });
      await queryInterface.dropTable('Users', { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};
