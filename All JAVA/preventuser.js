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