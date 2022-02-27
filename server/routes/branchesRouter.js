const Router = require('express')
const router = new Router()
const branchesController = require('../controllers/branchesController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), branchesController.create)
router.get('/', branchesController.getAll)

module.exports = router