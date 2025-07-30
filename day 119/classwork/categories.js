const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];

function renderCategoryButtons() {
  const container = document.getElementById("categories");

  categories.forEach(category => {
    const button = document.createElement("button");
    button.textContent = category;
    button.style.margin = "5px";
    button.addEventListener("click", () => filterByCategory(category));
    container.appendChild(button);
  });

  // დამატება "All" ღილაკის
  const allBtn = document.createElement("button");
  allBtn.textContent = "All";
  allBtn.addEventListener("click", fetchProducts);
  container.prepend(allBtn);
}

async function filterByCategory(category) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`);
    const products = await response.json();
    renderf(products);
  } catch (err) {
    console.error("Category fetch error:", err.message);
  }
}
