require("dotenv").config();

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_DBNAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

// Users Table
const User = sequelize.define("User", {
    username: {
        type: DataTypes.STRING
    }
});

// Book Table
const Book = sequelize.define("Book", {
    location: {
        type: DataTypes.STRING
    }
});

// Metadata Table
const Metadata = sequelize.define("Metadata", {
    title: {
        type: DataTypes.STRING
    },
    author: {
        type: DataTypes.STRING
    },
    published: {
        type: DataTypes.INTEGER
    }
});

// Associations
User.hasMany(Book);
Book.belongsTo(User);
Book.hasOne(Metadata);
Metadata.belongsTo(Book);

// I think this syncs the database every time a change is saved.
(async () => {
    await sequelize.sync({force: true});
})();
