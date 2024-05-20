document.addEventListener('DOMContentLoaded', function() {
    // Dummy product data
    const products = [
        { name: 'Product 1', description: 'Description of Product 1' },
        { name: 'Product 2', description: 'Description of Product 2' },
        { name: 'Product 3', description: 'Description of Product 3' }
    ];

    const productList = document.getElementById('product-list');

    // Populate product list
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        `;
        productList.appendChild(productDiv);
    });
});
