const Sequelize =require('sequelize')
const db=require('../db')
const Cart=db.define('cart',{
    id :{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement: true
    },
    mobile_name:{
        type:Sequelize.STRING,
        allowNull:false

    },
    price:{
        type:Sequelize.STRING,
        allowNull:false
    },
    image:{
        type:Sequelize.STRING,
        allowNull:false
    }

},{
    db,
    tableName:"cart",
    timestamps:false  
})

module.exports=Cart