$(document).ready(function() {
  $(".cart").text(function() { return 0; });
  sessionStorage.setItem("icount", 0);
  sessionStorage.removeItem("cart");
});
