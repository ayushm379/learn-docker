const { Sequelize, DataTypes } = require("sequelize");

const DATABASE_NAME = process.env.DATABASE_NAME;
const DATABASE_USERNAME = process.env.DATABASE_USERNAME;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
const DATABASE_HOST = process.env.DATABASE_HOST;

const sequelize = new Sequelize(
  DATABASE_NAME,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  {
    host: DATABASE_HOST,
    dialect: "mysql",
    port: 3306,
    operatorsAliases: 0,
  }
);

const Person = sequelize.define("person", {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
});

module.exports = {sequelize, Person};