let container = document.getElementById("container");
let categories = document.getElementById("categories");
let sort = document.getElementById("sort");
let productData = [];
// =======================fetchdata from API==================
async function fetchData(URL) {
  try {
    let res = await fetch(URL);
    let data = await res.json();
    //   console.log(data);

    showData(data);
    productData = data;
  } catch (error) {
    console.log(error);
  }
}
fetchData("https://fakestoreapi.com/products");
//  Retriving  data to product page
function showData(arr) {
  container.innerHTML = null;
  arr.forEach((ele, i) => {
    // console.log(ele);
    let cart = document.createElement("div");
    cart.id = "cart";
    let image = document.createElement("img");
    image.src = ele.image;
    let title = document.createElement("h3");
    title.textContent = ele.title;
    let price = document.createElement("h4");
    price.textContent = "price : $" + ele.price;

    cart.append(image, title, price);
    container.append(cart);
    // console.log(image,title,price)
  });
}

// ====================filter data from categories=============

categories.addEventListener("change", () => {
  let value = categories.value;
  console.log(value);

  let URL = `https://fakestoreapi.com/products/category/${value}`;

  fetchData(URL);
});

// ==================sort data from ascending order==================

sort.addEventListener("change", () => {
  let value = sort.value;
  if (value == "asc" || value == null) {
    // console.log(productData);
    let abc = productData.sort((a, b) => {
      return a.price - b.price;
    });
    showData(abc);
  } else if (value == "des") {
    let abc = productData.sort((a, b) => {
      return b.price - a.price;
    });
    showData(abc);
  }

  // console.log(value);
});
