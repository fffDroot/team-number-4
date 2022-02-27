const Router = require('express')
const router = new Router()
const branchesRouter = require('./branchesRouter')
const userRouter = require('./userRouter')
const foodtypesRouters = require('./foodtypesRouters')
const storagesRouter = require('./storagesRouter')


router.use('/user', userRouter)
router.use('/branches', branchesRouter)
router.use('/foodtypes', foodtypesRouters)
router.use('/storages', storagesRouter)

module.exports = router
