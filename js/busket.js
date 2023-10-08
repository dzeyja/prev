const busketButton = document.querySelector("[data-modal-busket-btn]");
const busketWindow = document.querySelector("[data-busket]");
const busketCloseBtn = document.querySelector("[data-busket-close]");

busketButton.addEventListener("click", function () {
  busketWindow.classList.remove("hidden");
});

busketWindow.addEventListener("click", function () {
  busketWindow.classList.add("hidden");
});

busketCloseBtn.addEventListener("click", function () {
  busketWindow.classList.add("hidden");
});

busketWindow
  .querySelector(".modal-busket")
  .addEventListener("click", function (e) {
    e.stopPropagation();
  });

document.addEventListener("DOMContentLoaded", function () {
  const cart = [];
  const cartItemsList = document.querySelector("#cart-items");
  const cartTotal = document.querySelector("#cart-total");

  function addToCart(product) {
    // Проверяем, есть ли товар уже в корзине
    const existingProductIndex = cart.findIndex(
      (item) => item.name === product.name
    );

    if (existingProductIndex !== -1) {
      // Если товар уже в корзине, увеличиваем количество
      cart[existingProductIndex].quantity++;
    } else {
      // Иначе, добавляем новый товар в корзину
      cart.push(product);
    }

    // Обновляем интерфейс корзины
    updateCartUI();
  }

  function updateCartUI() {
    cartItemsList.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${item.name} - Количество: ${item.quantity}`;
      cartItemsList.appendChild(listItem);
      total += item.price * item.quantity;
    });

    cartTotal.textContent = `Общая стоимость: ${total}`;
  }

  // Обработчик события кнопки добавит в корзину
  const addToCartBtn = document.querySelector("#add-to-cart");

  addToCartBtn.addEventListener("click", function () {
    const productName = document.querySelector("#product-name").textContent;
    const productPrice = parseFloat(
      document.getElementById("product-price").textContent.replace("$", "")
    );

    const product = {
      name: productName,
      price: productPrice,
    };

    addToCart(product);
  });
});
