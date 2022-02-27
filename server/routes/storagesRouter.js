const Router = require('express')
const router = new Router()
const storagesController = require('../controllers/storagesController')

router.post('/', storagesController.create)
router.get('/', storagesController.getAll)
router.get('/:id', storagesController.getOne)

module.exports = router