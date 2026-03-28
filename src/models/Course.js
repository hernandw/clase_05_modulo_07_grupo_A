import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Course = sequelize.define(
  "course",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true, //createAT updateAt
  },
);

export default Course
