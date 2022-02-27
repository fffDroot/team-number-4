const Router = require('express')
const router = new Router()
const foodtypesController = require('../controllers/foodtypesController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), foodtypesController.create)
router.get('/', foodtypesController.getAll)
router.get('/:id', foodtypesController.getOne)

module.exports = router
