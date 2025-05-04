let cartCount = 0;
const cartItems = document.getElementById("cart-items");
const cartCounter = document.getElementById("cart-count");

function addToCart() {
  cartCount++;
  cartCounter.textContent = cartCount;
  const item = document.createElement("li");
  item.textContent = "Sweat Miki Minene - 89€";
  cartItems.appendChild(item);
}