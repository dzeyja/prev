var categories = [];
    var ready = false;
    var items = [];
$.ajax({
    url: server_url + '/categories',
    method: "GET",
    success: function(response) {
        categories  = response;
        dynamic_adding_categories(categories)
    },
    error: function(xhr, textStatus, errorThrown) {
        console.error("AJAX Error:", textStatus, errorThrown);
    }
}).done(function(response) {
    main()
    $.ajax({
        url: server_url + '/items',
        method: "GET",
        success: function(response) {
            items  = response;
            dynamic_adding_items(items)
            smartbasket()
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error("AJAX Error:", textStatus, errorThrown);
        }
    })
    .done(function(response) {
        modal()      
    })
    .fail(function(error) {
        console.error("AJAX Error:", error);
    });
})
.fail(function(error) {
    console.error("AJAX Error:", error);
});
var category_ready = false
function dynamic_adding_categories(categories) {
    var li_html_list = ``
    var div_html_list = ``
    var li_html_list_2 =``

    categories.forEach(function(element) {
        var li_html = `
        <li class="nav-item" id="category_`+element.id+`">
            <a class="nav-link" href="#container_`+element.id+`">`+element.name+`</a>
        </li>`
        li_html_list += li_html

        var div_html = `
        <div id="container_`+element.id+`" class="title">`+element.name+`</div>
        <div class="dishes `+element.id+`"></div>
        `
        div_html_list += div_html

        var li_html_2 =`
        <div class="swiper-slide">
          <a class="nav-link" href="#container_`+element.id+`">`+element.name+`</a>
        </div>
        `  
        li_html_list_2 += li_html_2      
    });

    $('#category_ul').append(li_html_list);
    $('#swiper-container').append(li_html_list_2);
    $('#container').append(div_html_list);
    category_ready = true
}

///////////////////// addingitems


function dynamic_adding_items(items) { 
    // if(!category_ready){
    //   setTimeout(function() {
    //     dynamic_adding_items(items)
    //   }, 600);      
    // } else {
    items.forEach(function(element) {
        if(element.description !== ""){
            element.description = "(" + element.description + ")"
        } else {
            element.description = ""
        }
        var id = element.id
        var card_html = `
        <div data-modal-button="modal-`+id+`" class="card-dishes">
            <img src="`+element.picture+`" alt="" class="card-img" />

            <div class="card-text">
              <div class="card-title">`+element.name+`</div>

              <div class="card-suptitle">
                `+element.description+`
              </div>

              <div class="card-price">`+element.price+` тг</div>
            </div>
          </div>
        
        <div id="modal-`+id+`" data-modal="" class="fade-block hidden">
            <div class="modal-window">
              <div class="card-modal">
                <img src="`+element.picture+`" alt="" class="card-img-modal" />

                <button data-modal-close type="button">
                  <img
                    src="./img/icons8-закрыть-50 (1).png"
                    alt=""
                    class="close"
                  />
                </button>

                <div class="text-modal">
                  <div id="product-name" class="modal-title">
                    `+element.name+`
                  </div>

                  <div class="modal-suptitle">
                    `+element.description+`
                  </div>

                  <div class="product__quantity"></div>

                  <div id="product-price" class="modal-price">`+element.price+` тг</div>

                  <button
                    data-sb-id-or-vendor-code="0`+id+`"
                    data-sb-product-name="`+element.name+`"
                    data-sb-product-price="`+element.price+`"
                    data-sb-product-quantity="1"
                    data-sb-product-img="`+element.picture+`"
                    type="button"
                    id="add-to-cart"
                    class="modal-btn"
                  >
                    Добавить к заказу
                  </button>
                </div>
              </div>
            </div>
          </div>
        `
        // var category_id = element.category.id;
        // var element_selector = '.dishes.' + category_id;
        var element_boolean = $('.dishes.' + element.category.id);
        
        if (element_boolean.length > 0) {
            element_boolean.append(card_html);  
        }
    });
 
}

/////////////////////////main

function main(){
      //Слайдер
      document.addEventListener("DOMContentLoaded", function () {
        const swiper = new Swiper(".swiper-container", {
          slidesPerView: "auto",
          freeMode: true, // Включить свободный режим перемещения слайдов
          freeModeMomentum: true, // Включить инерцию для свободного перемещения
          freeModeMomentumVelocityRatio: 0.2, // Коэффициент скорости инерции
          loop: true,
          spaceBetween: 20, // Бесконечный цикл
        });
      });

        const navLinks = document.querySelectorAll(".nav-link");
  
        navLinks.forEach((link) => {
          link.addEventListener("click", smoothScroll);
        });
  
        function smoothScroll(e) {
          e.preventDefault();
  
          const targetId = this.getAttribute("href");
          const targetElement = document.querySelector(targetId);
          const targetPosition = targetElement.offsetTop;
  
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }  
  }
  
  function modal(){
    const modalButtons = document.querySelectorAll("[data-modal-button]");
    const allModals = document.querySelectorAll("[data-modal]");
    const modalCloseButtons = document.querySelectorAll("[data-modal-close]");
    const fadeClick = document.querySelectorAll(".modal-window");
  
    // Модальное окно для просмотра времени
    const timeBtn = document.querySelector("[data-time-btn]");
    const timeModal = document.querySelector("[data-modal-time]");
    const timeCloseBtn = document.querySelector("[data-close-time ]");
  
    timeBtn.addEventListener("click", function () {
      timeModal.classList.remove("hidden");
    });
  
    timeCloseBtn.addEventListener("click", function () {
      timeModal.classList.add("hidden");
    });
  
    timeModal.addEventListener("click", function () {
      timeModal.classList.add("hidden");
    });
  
      // Скрипты для модальных окон
      modalButtons.forEach(function (item) {
        item.addEventListener("click", function () {
          const modalId = this.dataset.modalButton;
          const modal = document.querySelector("#" + modalId);
          modal.classList.remove("hidden");
        });
      });
  
      allModals.forEach(function (item) {
        item.addEventListener("click", function () {
          this.classList.add("hidden");
        });
      });
  
      modalCloseButtons.forEach(function (item) {
        item.addEventListener("click", function () {
          const closeModal = this.closest("[data-modal]");
          closeModal.classList.add("hidden");
        });
      });
  
      fadeClick.forEach(function (item) {
        item.addEventListener("click", function (e) {
          e.stopPropagation();
        });
      });
      ready = true;
      
  }
  
function smartbasket(){
    setTimeout(function() {
        var itemsReady = new Event("ItemsReady");
        document.dispatchEvent(itemsReady);
        // console.log(itemsReady.type);
    }, 200);
}