let cartItemsFromLocalStorage = JSON.parse(localStorage.getItem("cartItems"));
let cardSection = document.getElementById("card_section");
let cartBill=document.getElementsByTagName("cart_bill")

if (cartItemsFromLocalStorage != null) {
  const itemCountMap = {};
  cartItemsFromLocalStorage.forEach((item) => {
    if (itemCountMap[item.productName]) {
      itemCountMap[item.productName]++;
    } else {
      itemCountMap[item.productName] = 1;
    }
  });

  Object.keys(itemCountMap).forEach((productName) => {
    const item = cartItemsFromLocalStorage.find((item) => item.productName === productName);
    cardSection.innerHTML += `
      <div class="card cart_card" id="card">
        <div class="product-image-name">
          <img id="cart_img" src="${item.productImg}" alt="">
          <div>
            <h5 class="product_name">${item.productName} x ${itemCountMap[productName]}</h5>
            <p><b>Amount : </b> ${item.productPrice} INR </p>
          </div>
        </div>
        <button id="remove_from_cart_btn" onclick="removeFromCart(${cartItemsFromLocalStorage.indexOf(item)})">Remove From Cart </button>
      </div>
    `;
  });
}

function removeFromCart(index) {
  let cartItemsFromLocalStorage = JSON.parse(localStorage.getItem("cartItems"));
  cartItemsFromLocalStorage.splice(index, 1);
  localStorage.setItem("cartItems", JSON.stringify(cartItemsFromLocalStorage));
  window.location.reload();
}

let totalBill = document.getElementById("total_bill");
if (cartItemsFromLocalStorage != null) {
  let price = cartItemsFromLocalStorage.reduce((acc, item, i) => {
    return acc + parseFloat(item.productPrice);
  }, 0);
  totalBill.innerText = `Rs ${price}`;
} else {
  totalBill.innerText = `RS ${0}`;
}

function placeOrder() {
  if (cartItemsFromLocalStorage != null) {
    var cart = confirm("Do you want to place this order 'Press OK'");
  }
  if (cart == true) {
    if (cartItemsFromLocalStorage != null) {
      localStorage.removeItem("cartItems");
      alert("Your order is placed successfully...");
      location.reload();
      totalBill.innerText = `RS ${0}`;
    }
  }
}
// let container=document.getElementsByClassName("cart_container")
// let emptyImage=document.getElementsByClassName("empty-cart-image")
// if (cartItemsFromLocalStorage.length== null) {
//   container.style.display = "none";
//   emptyImage.style.display="block"
// } else {
  
//   container.style.display = "block";
//   emptyImage.style.display="none"

// }
let container = document.getElementsByClassName("cart_container");
let emptyImage = document.getElementsByClassName("empty-cart-image");

if (cartItemsFromLocalStorage === null || cartItemsFromLocalStorage.length === 0) {
  Array.prototype.forEach.call(container, (elem) => {
    elem.style.display = "none";
  });
  Array.prototype.forEach.call(emptyImage, (img) => {
    img.style.display = "block";
  });
} else {
  Array.prototype.forEach.call(container, (elem) => {
    elem.style.display = "flex";
  });
  Array.prototype.forEach.call(emptyImage, (img) => {
    img.style.display = "none";
  });
}