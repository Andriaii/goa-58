function renderf(products) {
  const main = document.querySelector("main");
  main.innerHTML = ""; // გასუფთავება ყოველი გამოძახებამდე

  products.forEach(product => {
    const section = document.createElement("section");
    section.innerHTML = `
      <h3>${product.title}</h3>
      <p>Category: ${product.category}</p>
      <img src="${product.image}" width="100" alt="${product.title}" />
      <p>Price: $${product.price}</p>
    `;
    section.style.border = "1px solid #ccc";
    section.style.padding = "10px";
    section.style.margin = "10px 0";
    main.appendChild(section);
  });
}
