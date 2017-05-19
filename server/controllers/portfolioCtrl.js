const portfolioUtil = require('../utils/portfolioUtil.js')

const portfolio = {
  sendUrls: (req, res) => {
    console.log('in portfolioCtrl')
    res.send(portfolioUtil.getImageUrls())
  },
}

module.exports = {
  portfolio,
}
