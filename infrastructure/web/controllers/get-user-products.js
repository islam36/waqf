module.exports = function makeGetUserProducts({ listProducts }) {
  return async function getUserProducts(req, res) {
    try {
      // TODO  req.body is undefined in case of "get" request => I use req.query instead
      const { ownerId } = req.query
      const productsList = await listProducts({ ownerId })
      res.render('profile/products/index', { data: { products: productsList } })
    } catch (err) {
      res.render('profile/products/new', { errorMessages: err.message })
    }
  }
}
