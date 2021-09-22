module.exports = (sequelize, DataTypes) => {
    const Metadata = sequelize.define("Metadata", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        published: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    })
    return Metadata
}
