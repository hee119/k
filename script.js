document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelector('.product-grid');

    // Sample data for products
    const products = Array.from({ length: 10 }, (_, i) => ({
        rank: i + 1,
        name: '상품이름',
        price: '상품가격',
    }));

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';

        card.innerHTML = `
            <div class="product-image-container"></div>
            <p class="product-rank">${product.rank}위</p>
            <p class="product-name">${product.name}</p>
            <p class="product-price">${product.price}</p>
        `;

        productGrid.appendChild(card);
    });
});