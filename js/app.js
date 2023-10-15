// Oculta el efecto de carga y muestra el contenido después de cargar los productos
async function fetchProducts() {
    try {
        const response = await fetch('https://api-products-spring-boot-production.up.railway.app/api/list-products');
        const data = await response.json();

        const productList = document.getElementById('product-list');
        productList.innerHTML = '';

        data.forEach(product => {
            const card = `
            <div class="col-md-4 mb-4">
                <div class="card product-card">
                    <div>
                        <img src="${product.img}" class="card-img-top img-size" alt="${product.name}">
                        <center>
                        <div class="py-3"><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>
                    </div>
                    </center>
                    <div class="card-body">
                        <h5 class="card-title product-title">${product.name}</h5>
                        <p class="card-text product-price">Price: $${product.price}</p>
                        <div class="px-4">
                            <button class="btn btn-success"><i class="fa-solid fa-plus fa-sm"></i></button>
                            0   
                            <button class="btn btn-success"><i class="fa-solid fa-minus fa-sm"></i>
                        </button></div>
                    </div>
                    <a href="#" class="text-warning px-5" data-toggle="modal" data-target="#myModal">Ver detalles</a>
                    <button type="button" class="btn btn-warning"><i class="fa-solid fa-cart-plus"></i></button>
                </div>
            </div>
        `;
            $("#title").val("adasdasdas");
            productList.innerHTML += card;
        });


        // Oculta el efecto de carga
        const loaderContainer = document.querySelector(".loader-container");
        loaderContainer.style.display = "none";

        // Muestra el contenido de la tienda de productos
        document.body.style.overflow = "visible";
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

fetchProducts();