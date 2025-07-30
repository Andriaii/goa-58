
const products = [];

function addProductToTheCart(product) {
  products.push(product);
  console.log("🛒 Cart:", products);
}

module.exports = { addProductToTheCart };
