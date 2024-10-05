let clothing = document.getElementById("clothing")
let accessories = document.getElementById("accessories")
axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
    .then((res) => {
        let products = res.data
        products.map((item, i) => {
            if (item.isAccessory == false) {
                if (clothing != null) {
                    clothing.innerHTML += `
        <div class="card" onclick="specificationOfProduct('${item.id}')">
                <img src="${item.preview}" alt="">
                <b>${item.name}</b>
                <p>${item.brand}</p>
                <p>${item.price} INR</p>
            </div>`
                }
            } else {
                if (accessories != null) {
                    accessories.innerHTML += `
        <div class="card" onclick="specificationOfProduct('${item.id}')">
                <img src="${item.preview}" alt="">
                <b>${item.name}</b>
                <p>${item.brand}</p>
                <p>${item.price} INR</p>
            </div>`
                }
            }
        })
    })
function specificationOfProduct(id) {
    location.assign(`specification.html?p_id=${id}`)
}
function header() {
    location.assign("index1.html")
}


