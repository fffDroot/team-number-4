const Router = require('express')
const router = new Router()
const storagesController = require('../controllers/storagesController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), storagesController.create)
router.get('/', storagesController.getAll)
router.get('/:id', storagesController.getOne)

module.exports = router