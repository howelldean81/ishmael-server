module.exports = (sequelize, DataTypes) => {
    const Books = sequelize.define("Books", {
        bookUrl: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Books
}
