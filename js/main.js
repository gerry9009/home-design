
function checkBoxValue(win) {
    if (win.matches) {
      document.getElementById("header--menu__toggle").checked = false;
    }
  }
  
  var win = window.matchMedia("(min-width: 992px)");
  checkBoxValue(win);
  win.addEventListener("change", checkBoxValue);