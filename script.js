document.addEventListener("DOMContentLoaded", function() {
    const productGrid = document.querySelector(".product-grid");

    for (let i = 1; i <= 10; i++) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.dataset.name = `Component ${i}`;
        productCard.id = `node-5-${74 + i}`;

        productCard.innerHTML = `
            <div class="product-image-container" id="node-I5-${74 + i}-5_69"></div>
            <div class="product-rank" id="node-I5-${74 + i}-5_71">
                <p>${i}위</p>
            </div>
            <div class="product-name" id="node-I5-${74 + i}-5_72">
                <p>상품이름</p>
            </div>
            <div class="product-price" id="node-I5-${74 + i}-5_73">
                <p>상품가격</p>
            </div>
        `;

        productGrid.appendChild(productCard);
    }
});
