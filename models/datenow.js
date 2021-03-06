module.exports = function (sequelize, DataTypes) {
    var Datenow = sequelize.define("Datenow", {
        apiId: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        zipCode: DataTypes.STRING,
        apiType: DataTypes.STRING,
        name: DataTypes.STRING,
        popularity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    });
    return Datenow;
};

// module.exports = db;