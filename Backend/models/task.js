const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../db/postgres')

const Task = sequelize.define("Task", {
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    startDate: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    deadline: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('In Review', 'In Progress', 'Completed'),
        allowNull: false,
    }
})

Task.sync({ force: false }).then(() => {
    console.log('Task model synced with the database.');
}).catch((error) => {
    console.error('Error syncing Task model:', error);
})

module.exports = { Task }