const Router = require('express')
const router = new Router()
const foodtypesController = require('../controllers/foodtypesController')

router.post('/', foodtypesController.create)
router.get('/', foodtypesController.getAll)
router.get('/:id', foodtypesController.getOne)

module.exports = router
