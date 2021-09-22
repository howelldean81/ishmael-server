// Grab db instance
const { sequelize, synceDb } = require('../db')
const { DataTypes } = require('sequelize')

// Grab Model Functions
const DefineUser = require('./User');
const DefineBooks = require('./Books');
const DefineMetadata = require('./Metadata');

const User = DefineUser(sequelize, DataTypes);
const Books = DefineBooks(sequelize, DataTypes);
const Metadata = DefineMetadata(sequelize, DataTypes);
// Defines the model

// Define Associations-

User.hasMany(Books);
Books.belongsTo(User);
Books.hasOne(Metadata);
Metadata.belongsTo(Books);

// Sync
// synceDb(sequelize, { alter:true })
sequelize.sync()


module.exports = { User, Books, Metadata }