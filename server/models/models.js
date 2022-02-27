const sequelize = require('../db')
const  {DataTypes} = require('sequelize')

const FoodType = sequelize.define('foodtype', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
    price: {type: DataTypes.INTEGER,},
    // description: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING, allowNull: false},

})

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
})

const Branches = sequelize.define('branches', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name_shop: {type: DataTypes.STRING, unique: true},
    address: {type: DataTypes.STRING, unique: true},
})

const Storage = sequelize.define('storage', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name_shop: {type: DataTypes.STRING, unique: true},
    address: {type: DataTypes.STRING, unique: true},
})

const FoodInfo = sequelize.define('storage', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})




Branches.hasMany(User)
User.belongsTo(Branches)

Branches.hasOne(Storage)
Storage.belongsTo(Branches)

FoodType.hasMany(FoodInfo, {as: 'info'})
FoodInfo.belongsTo(FoodType)



module.exports = {
    User,
    Branches,
    Storage,
    FoodType

}
