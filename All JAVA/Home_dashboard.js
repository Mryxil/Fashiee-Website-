
let MainBox = document.querySelector(".menu-main-box-category");
let user_box = document.querySelector(".user-box-main");
let CategoryMainBox = document.querySelector(".menu-box-category");
let Stopscroll = document.querySelector("body");
let categorybt1 = document.querySelector("#menu-bt-1");
let categorybt2 = document.querySelector("#menu-java-2");
let categorybt3 = document.querySelector("#category-bdy-close");

// Check if the menu is already open or closed in local storage
let menuState = localStorage.getItem("menuState");
if (menuState === "open") {
  MainBox.classList.add("category-java-1");
  CategoryMainBox.classList.add("category-java-2");
  Stopscroll.classList.add("stop-body");
}

categorybt1.addEventListener("click", () => {
  MainBox.classList.toggle("category-java-1");
  CategoryMainBox.classList.toggle("category-java-2");
  Stopscroll.classList.toggle("stop-body");

  // Save the state of the menu to local storage
  if (MainBox.classList.contains("category-java-1")) {
    localStorage.setItem("menuState", "open");
  } else {
    localStorage.setItem("menuState", "closed");
  }
});

categorybt2.addEventListener("click", () => {
  MainBox.classList.toggle("category-java-1");
  CategoryMainBox.classList.toggle("category-java-2");
  Stopscroll.classList.toggle("allow-body");

  // Save the state of the menu to local storage
  if (MainBox.classList.contains("category-java-1")) {
    localStorage.setItem("menuState", "open");
  } else {
    localStorage.setItem("menuState", "closed");
  }
});

categorybt3.addEventListener("click", () => {
  MainBox.classList.toggle("category-java-1");
  CategoryMainBox.classList.toggle("category-java-2");
  Stopscroll.classList.toggle("allow-body");

  // Save the state of the menu to local storage
  if (MainBox.classList.contains("category-java-1")) {
    localStorage.setItem("menuState", "open");
  } else {
    localStorage.setItem("menuState", "closed");
  }
});



let loaderscreen = document.querySelector(".loading-box");

window.addEventListener("load", function(){
    loaderscreen.style.display="none"
})




$(".size1, .size2, .size3, .size4, .size5, .size6").click(function() {
  var size = $(this).text();
  $(".product-size-check-box, .delivery_size").text(size);
  $(this).css({background: "black", color: "white"}).siblings().css({background: "white", color: "black"});
  $(".buy-buy-bt").click(function() {
    $(".check-out-buy-main-box").show();
    document.querySelector(".buy-buy-cart-bt").style.display="none"
  });
});




$( ".BUY-bt-check-out " ).click(function() {
  document.querySelector(".check-out-buy-main-box").style.display="none";
});

$( ".cancel_gcash" ).click(function() {
  document.querySelector(".gcash_payment").style.display="none";
});

$(".order_recieved_delivery").click(function (){
  document.querySelector(".thank_you_box_main").style.display="block";
  document.querySelector(".delivery_main_box").style.display="none";
})

$(".agree_gcash").click(function (){
  document.querySelector(".delivery_main_box").style.display="block";
  document.querySelector(".gcash_payment").style.display="none";
})

$(".gcashff").click(function (){
  document.querySelector(".gcashff").style.opacity="1";
  document.querySelector(".cash-on-deliver").style.opacity="0.5";

  $(".check_out_buy_SS").click(function (){
      document.querySelector(".gcash_payment").style.display="block";
      document.querySelector(".check-out-buy-main-box").style.display="none";
  });
});

function cash_on_delivery(){
  document.querySelector(".cash-on-deliver").style.opacity="1";
  document.querySelector(".gcashff").style.opacity="0.5";

  $(".check_out_buy_SS").click(function (){
      document.querySelector(".delivery_main_box").style.display="block";
      document.querySelector(".check-out-buy-main-box").style.display="none";
      document.querySelector(".gcash_payment").style.display="none"
  });
};



function user(){
  document.querySelector(".user-box-main").style.display="block";
}

 function closed_user(){
  document.querySelector(".user-box-main").style.display="none";
 }



$(document).ready(function() {
  $('#closed_user_bx').on('click', function() {
    window.location.href = "index.html";

    
  });
});
DisableBackButton();

function noBack() {
  window.history.forward();
}

function DisableBackButton() {
  window.history.forward();
}

window.onpageshow = function (evt) {
  if (evt.persisted) {
    DisableBackButton();
  }
};

window.onunload = function () {
  void (0);
  document.getElementById("body").style.display = "none";
  setTimeout(function () {
    window.location.reload();
  }, 0);
};

(function (global) {
  if (typeof global === "undefined") {
    throw new Error("window is undefined");
  }
  var _hash = "!";
  var noBackPlease = function () {
    global.location.href += "#";
    global.setTimeout(function () {
      global.location.href += "!";
    }, 0);
  };

  global.onhashchange = function () {
    if (global.location.hash !== _hash) {
      global.location.hash = _hash;
    }
  };

  global.onload = function () {
    noBackPlease();
    global.addEventListener("keydown", function (e) {
      if (e.keyCode === 8) {
        e.preventDefault();
        e.stopPropagation();
      }
    });
    global.addEventListener("load", function () {
      setTimeout(function () {
        if (global.location.hash === _hash) {
          global.location.hash = "";
        }
      }, 0);
    });
  };
})(window);

// disable back button on browser
history.pushState(null, null, location.href);
window.onpopstate = function () {
  history.go(1);
};
window.addEventListener('DOMContentLoaded', function() {
  // Check if the flag is set
  if (sessionStorage.getItem('loggedOut')) {
    // Clear the flag so that the user can log in again
    sessionStorage.removeItem('loggedOut');
    
    // Redirect the user to the login page
    window.location.href = 'login.html';
  }
});

window.onload = function(){
  var ch = $('.buy-product-name-tag').text();
  var pr = $('.buy-product-price-tag').text();


  document.querySelector('.product-name-check-box').innerHTML = ch;
  document.querySelector('.gcash_separator_tag').innerHTML = ch;
  document.querySelector('.delivery_name').innerHTML = ch;

  document.querySelector('.gcash_separator_tag2').innerHTML = pr;
  document.querySelector('.check-out-price-tag').innerHTML = pr;

}

function shirts_hide(){
  var shorts = document.querySelectorAll('.shorts');
  var hoodie = document.querySelectorAll('.hoodie');
  var pant = document.querySelectorAll('.pants');
  var shirts = document.querySelectorAll('.shirts');

  for (var i = 0; i < shorts.length; i++) {
      shorts[i].style.display = 'none';
  }

  for (var i = 0; i < hoodie.length; i++) {
    hoodie[i].style.display = 'none';
  }

  for (var i = 0; i < pant.length; i++) {
    pant[i].style.display = 'none';
  }

  for (var i = 0; i < shirts.length; i++) {
    shirts[i].style.display = 'block';
  }
}

function shorts_hide(){
  var shorts = document.querySelectorAll('.shorts');
  var hoodie = document.querySelectorAll('.hoodie');
  var pant = document.querySelectorAll('.pants');
  var shirts = document.querySelectorAll('.shirts');

  for (var i = 0; i < shorts.length; i++) {
      shorts[i].style.display = 'block';
  }

  for (var i = 0; i < hoodie.length; i++) {
    hoodie[i].style.display = 'none';
  }

  for (var i = 0; i < pant.length; i++) {
    pant[i].style.display = 'none';
  }

  for (var i = 0; i < shirts.length; i++) {
    shirts[i].style.display = 'none';
  }
}

function pants_hide(){
  var shorts = document.querySelectorAll('.shorts');
  var hoodie = document.querySelectorAll('.hoodie');
  var pant = document.querySelectorAll('.pants');
  var shirts = document.querySelectorAll('.shirts');

  for (var i = 0; i < shorts.length; i++) {
      shorts[i].style.display = 'none';
  }

  for (var i = 0; i < hoodie.length; i++) {
    hoodie[i].style.display = 'none';
  }

  for (var i = 0; i < pant.length; i++) {
    pant[i].style.display = 'block';
  }

  for (var i = 0; i < shirts.length; i++) {
    shirts[i].style.display = 'none';
  }
}

function hoodie_hide(){
  var shorts = document.querySelectorAll('.shorts');
  var hoodie = document.querySelectorAll('.hoodie');
  var pant = document.querySelectorAll('.pants');
  var shirts = document.querySelectorAll('.shirts');

  for (var i = 0; i < shorts.length; i++) {
      shorts[i].style.display = 'none';
  }

  for (var i = 0; i < hoodie.length; i++) {
    hoodie[i].style.display = 'block';
  }

  for (var i = 0; i < pant.length; i++) {
    pant[i].style.display = 'none';
  }

  for (var i = 0; i < shirts.length; i++) {
    shirts[i].style.display = 'none';
  }
}

function restore_all(){
  var pd_box = document.querySelectorAll('.product-item-box');

  for (var i = 0; i < pd_box.length; i++) {
      pd_box[i].style.display = 'block';
  }


}

/*Check Out */
window.onload = function(){
  var product_price = $('.buy-product-price-tag').text();
  var product_name = $('.buy-product-name-tag').text();

  document.querySelector('.delivery_price').innerHTML = product_price;
  document.querySelector('.check-out-price-tag').innerHTML = product_price;
  document.querySelector('.gcash_separator_tag2').innerHTML = product_price;
  document.querySelector('.product-name-check-box').innerHTML = product_name;
  document.querySelector('.gcash_separator_tag').innerHTML = product_name;
  document.querySelector('.delivery_name').innerHTML = product_name;

}
