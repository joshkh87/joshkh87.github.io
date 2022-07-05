// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

var total_visitor_list = [10, 10000, 10000];
var visitor_cnt_0 = total_visitor_list[0];
var visitor_cnt_1 = total_visitor_list[1];
var visitor_cnt_2 = total_visitor_list[2];
var result_data = "";
var display_div = document.getElementById("display_div_id");

function CounterVisitor(current_count) {
  setInterval(function () {
    // clear count
    while (display_div.hasChildNodes()) {
      display_div.removeChild(display_div.lastChild);
    }
    visitor_cnt_0++;
    if (visitor_cnt_0 > 99) {
      visitor_cnt_0 = 10; // reset count
      visitor_cnt_1++; // increase next count
    }
    if (visitor_cnt_1 > 99999) {
      visitor_cnt_2++;
    }
    result_data =
      visitor_cnt_2.toString() +
      visitor_cnt_1.toString() +
      visitor_cnt_0.toString();
    for (var i = 0; i < result_data.length; i++) {
      var live_flag = document.createElement("span");
      live_flag.className = "live_cnt";
      live_flag.innerText = result_data[i];
      display_div.appendChild(live_flag);
    }
  }, 1000);
}
