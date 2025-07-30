async function loadProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();

    const main = document.querySelector('main');
    main.innerHTML = '';

    products.forEach(product => {
      const div = document.createElement('div');
      div.innerHTML = `
        <img src="${product.image}" alt="${product.title}" width="150" />
        <h3>${product.title}</h3>
        <p>${product.description.substring(0, 100)}...</p>
        <p><strong>$${product.price}</strong></p>
        <button>Add to Cart</button>
      `;
      main.appendChild(div);
    });
  } catch (error) {
    console.error('Failed to load products', error);
  }
}

loadProducts();
