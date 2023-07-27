addEventListener('DOMContentLoaded', function() {
    let products = document.querySelector('.products');
    async function fetchPrdoucts(url) {
       try {
            let data = await fetch(url);
            let response = await data.json();

            console.log(response)

            //for in to loop over the indexes
            for(let apiContent in response) {

                let description = response[apiContent].description;
                let title = response[apiContent].title;


                products.innerHTML += 
                `
                <div class="product">
                    <img src="${response[apiContent].images[1]}" alt="" class="product-img">
                    <div clasls="product-content">
                        <h2 cass="product-title">${title.length > 18 ? title. substring(0, 18).concat('...more') : title}</h2>
                        <h4 class="product-category">${response[apiContent].category.name}</h4>
                        <p class="product-description">${description.length > 80 ? description.substring(0, 80).concat('...more') : description}</p>
                        <div class="product-price-container">
                            <h3 class="product-price">$${response[apiContent].price}</h3>
                            <a href="#" data-productId="${response[apiContent].id}" class="add-to-cart"><ion-icon name="cart-outline"></ion-icon></a>
                        </div>
                    </div>

                </div>       
                `;
            }

        } catch(err) {
            console.log(err)
        }
    };
    fetchPrdoucts('https://api.escuelajs.co/api/v1/products');
});