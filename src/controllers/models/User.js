// CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY,  username VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, password CHAR(60) NOT NULL );
export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: "users",
    },
  );
  return User;
};
