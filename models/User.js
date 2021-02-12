
module.exports = ( sequelize, DataTypes ) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        guid: {
            type: DataTypes.INTEGER,
            allowNul: false,
            defaultValue: 0
        },
        name: {
            type: DataTypes.STRING,
            allowNul: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.ENUM,
            values: ['admin', 'student'],
            allowNull: false,
            defaultValue: 'student'
        },
        avatar: {
            type: DataTypes.STRING,
            allowNul: true
        },
        profession: {
            type: DataTypes.STRING,
            allowNul: true
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE
        }

    }, {
        tableName: 'users',
        timestamp: true
    })

    return User;
}