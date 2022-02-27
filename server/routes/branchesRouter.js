const Router = require('express')
const router = new Router()
const branchesController = require('../controllers/branchesController')

router.post('/', branchesController.create)
router.get('/', branchesController.getAll)

module.exports = router