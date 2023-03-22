const Sequelize=require('sequelize')
const db=new Sequelize('shoppingcart','root','faris786',{
     host :"localhost",
     dialect:'mysql'

})

module.exports=db