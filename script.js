const imagecontainer = document.getElementById('image-container');

function handleClick( data) {
    
    fetchdata(data)
    
}

async function fetchdata(type){
    

try {

    const response = await fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json');
    
    if (!response.ok) {
        throw new Error('Network response was not ok.');
    }

    const data = await response.json();  


    const kidsItems = data.categories.filter(item => item.category_name === `${type}`);


    let [{category_products}] = kidsItems

    cards(category_products)



} catch (error) {

    let data = "Men"
    fetchdata(data)
}
}

fetchdata()

function cards(data) {
    let temp = ""
    data.forEach(element => {
        temp += `<div class="new">
        <div class="card">
        <img src="${element.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <span>${element.title}</span>
          <span>${element.vendor}</span></br>
          <span>${element.price}</span>
          <span id="compare">${element.compare_at_price}</span>
          <span id="perc">${Math.floor((element.price)/(element.compare_at_price)*100)}% OFF</span></br>
          <button id="cart">ADD TO CART</button>
        </div>
        </div>
      </div>`
    });

    imagecontainer.innerHTML = temp
}