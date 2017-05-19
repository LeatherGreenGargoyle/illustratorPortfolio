const router = require('express').Router()
const portfolioCtrl = require('../controllers/portfolioCtrl')

router.get('/getImages', portfolioCtrl.portfolio.sendUrls)

module.exports = router
