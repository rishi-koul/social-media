const express = require('express')
const router = express.Router()
const authMiddleware = require("../middleware/authMiddleware")
const UserModel = require("../models/UserModel")

router.get('/:searchText', authMiddleware, async(req, res)=>{
    let {searchText} = req.params
    searchText = searchText.trim()
    if(searchText.length === 0)return
    try {
        const results = await UserModel.find({
            name: {$regex:searchText, $options:"i"}
        })
        
        res.json(results)
    } catch (error) {
        console.log(error);
        return res.status(500).send("Server error")
    }
})

module.exports=router