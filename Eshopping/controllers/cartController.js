const cart = require('../models/cart')
const formidable = require('formidable')
const express = require('express')

const insert = async (req, res) => {

    try {
        const { mobilename, price } = req.body
        const { image } = req.files

        console.log(req.body.insertId)
        console.log(req.body);
        await cart.create({
            mobile_name: mobilename, price: price, image: `http://192.168.1.10:3000/images/${req.body.insertId}.jpg`
        }).catch(error => console.log(error))
        image.mv("D:/faris/project/Newscrel/Eshopping/public/images/" + req.body.insertId + ".jpg")
        res.status(200).json({ msg: "success"})
    } catch (error) {
        res.status(500).json({
            msg: "internal server error"
        })
        console.log(error);
    }
}

const show = async (req, res) => {
    try {
        const show = await cart.findAll({


        }).catch(error => console.log(error))
        res.status(200).json({ show })

    } catch (error) {
        res.status(500).json({ msg: "internal server error"})
        console.log(error);
    }

}
const a = (req, res) => {
    try {
        express.urlencoded({extended:false})
        express.json()
        // var form =  new formidable.IncomingForm()
        // form.parse(req)

        // form.on('filebegin', (name, file) => {
        //     file.path = __dirname + '/public/images' + file.name
        // })
        // form.on('file',(name, file) => console.log('upload file' + file.name))
        console.log(req.body.names);
        const  image  = req.files.image
        console.log(req.files);             
       
        cart.create({
            mobile_name: "mobilename", price: "price", image:"phone"
        }).catch(error => console.log(error))
        image.mv("D:/faris/project/Newscrel/Eshopping/public/images/" + req.body.insertId + ".jpg")

        res.render('index')
    } catch (error) {
        res.status(500).json({ msg: "internal server error" })
        console.log(error);
    }
}
const hi=(req,res)=>{
    res.render('index')
}
module.exports = { insert, show,a,hi }