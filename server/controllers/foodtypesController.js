const {FoodType, FoodInfo} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')


class FoodTypesController {

    async create(req, res, next){
        try{
            let {name, price, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const foodtype = await FoodType.create({name, price, img: fileName})

            if (info) {
                info = JSON.parse(info)
                info.forEach(i => FoodInfo.create({
                    title: i.title,
                    description: i.description,
                    foodId: foodtype.id
                    })
                )
            }



            return res.json(foodtype)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }


    }

    async getAll(req, res){
        const {name} = req.query;
        let foodtypes;
        if (!name){
            foodtypes = await FoodType.findAndCountAll()
        }
        if (name){
            foodtypes = await FoodType.findAndCountAll({where:{name}})
        }
        return res.json(foodtypes)
    }

    async getOne(req, res){
        const {id} = req.params
        const foodtype = await FoodType.findOne(
            {
                where: {id},
                include: [{model: FoodInfo, as: 'info'}]
            }
        )
        return res.json(foodtype)
    }
}

module.exports = new FoodTypesController()