const {Storage} = require('../models/models')
const ApiError = require('../error/ApiError')

class StoragesController {

    async create(req, res){
        const {name} = req.body
        const storage = await Storage.create({name})
        return res.json(storage)
    }

    async getAll(req, res){
        const storages = await Storage.findAll()
        return res.json(storages)
    }

    async getOne(req, res){

    }

}

module.exports = new StoragesController()