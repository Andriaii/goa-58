const { addProductToTheCart } = require("./cart");
const { add, subtract, multiply, divide } = require("./math");
const roundTheNumber = require("./roundTheNumber");
const greetUser = require("./greetUser");

async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    console.log("📦 All Products:\n");
    data.forEach((product, index) => {
      console.log(`${index + 1}) ${product.title} - $${product.price}`);
    });

    
    addProductToTheCart(data[0]);

    
    roundTheNumber(data[0].price);

    
    greetUser("Andria");

    
    console.log("🧮 Add:", add(5, 3));
    console.log("🧮 Subtract:", subtract(10, 4));
    console.log("🧮 Multiply:", multiply(6, 7));
    console.log("🧮 Divide:", divide(20, 5));

  } catch (error) {
    console.error("❌ Error fetching products:", error);
  }
}

fetchProducts();
