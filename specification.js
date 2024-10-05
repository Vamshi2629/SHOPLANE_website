let productSpecification = document.getElementById("specification-container")
let cartLength = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")).length : 0;

let cartCount = document.getElementById("lblCartCount")
cartCount.innerText = cartLength
function previewClick(id) {
  document.getElementsByClassName("active")[0].classList.remove("active")
  document.getElementById(id).classList.add("active")
  let img = document.getElementById(id).src
  let leftImg = document.getElementById("left-img")
  leftImg.src = img
}
let p_id = location.search.split("=")[1]
console.log(p_id)
axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${p_id}`)
  .then((res) => {
    let productData = res.data
    productSpecification.innerHTML = `<div class="specification-img">
            <img id="left-img"  src=${productData.preview} alt="product image">
        </div>
        <div class="description">
            <h2 class="product-name">${productData.name}</h2>
            <h4 class="product-brand">${productData.brand}</h4>
            <h3 class="product-price">Rs ${productData.price}</h3>
            <h3>Product Preview</h3>
            <div id="product-preview">
                
            </div>
            <div><h3>Description</h3>
            <p>${productData.description}</p></div>
            
            <button  onclick="addToCart('${productData.name}','${productData.price}','${productData.preview}')" id="cart-btn">Add to Cart</button>
        </div>`
    let productPreview = document.getElementById("product-preview")
    productData.photos.map((item, i) => {
      productPreview.innerHTML += `<img id="img${i}" class="small-img preview-img ${i == 0 ? `active` : ""}" onclick="previewClick('img${i}')" src=${item} alt="" >`
    })

  });
function header() {
  location.assign("http://127.0.0.1:5500/index1.html")
}

function addToCart(name, price, img) {
  let order = confirm("Do you want to add this item to cart 'press OK'")
  if (order == true) {
    let obj = {
      productName: name,
      productPrice: price,
      productImg: img,
    };

    let cartItemsFromLocalStorage = localStorage.getItem("cartItems");
    if (cartItemsFromLocalStorage !== null && cartItemsFromLocalStorage !== "") {
      let parsedCartItems = JSON.parse(cartItemsFromLocalStorage);
      parsedCartItems.push(obj);
      localStorage.setItem("cartItems", JSON.stringify(parsedCartItems));
    } else {
      let cartItems = [obj];
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
    window.location.reload();
  }
}
