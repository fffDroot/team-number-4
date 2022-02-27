const {Branches} = require('../models/models')
const ApiError = require('../error/ApiError')

class BranchesController {

    async create(req, res){
        const {name} = req.body
        const branch = await Branches.create({name})
        return res.json(branch)
    }

    async getAll(req, res){
        const branches = await Branches.findAll()
        return res.json(branches)
    }
}

module.exports = new BranchesController()