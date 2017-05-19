const ordersRoutes = require('./ordersRoutes.js')
const portfolioRoutes = require('./portfolioRoutes.js')

module.exports = app => {
  app.use('/orders', ordersRoutes)
  app.use('/portfolio', portfolioRoutes)
}
