async function fetchProducts() {
      try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);

    const products = await response.json();
    console.log("Products:", products);
    renderf(products);
  } catch (error) {
    console.error("Failed to fetch products:", error.message);
  }
}
