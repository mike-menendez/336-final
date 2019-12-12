// Get all items from the database
$(document).ready(function() {
    $.ajax({
        url: "https://final-cst336-mmenendez.herokuapp.com/items/all",
        type: "GET",
        success: function(res) {
            var i = 1;
            var x = '<div class = "container justify-content-center">\n';
            res.forEach(element => {
                if (i == 1) {
                    x = x + '<div class = "row d-flex justify-content-center">\n';
                }
                x = x + '<div class = "card shadow m-5 p-5 col-4">\n' +
                    '<img max-width="100%" height="auto" src = "' + element.img + '">\n</a>\n' +
                    '<div class = "card-body"> <h2 class = "card-title">\n' + element.p_name + '</h2> <p class = "card-text">Price: $' + element.price + '</p>\n' +
                    '<button class = "btn btn-success crt" id = "' + element.item_id + '">Add to Cart</button></div></div>';
                if (i == 4) {
                    i = 0;
                    x = x + "</div>";
                }
                i++;
            });
            x = x + "</div></div>";
            $(document.body).append(x);
            $(document).on("click", ".btn-success", function() {
                Swal.fire({
                    title: "Item Added!",
                    text: "Go to cart to view",
                    animation: true,
                    icon: 'info',
                    showConfirmButton: true
                });
                var itm = sessionStorage.getItem("icount");
                if (itm == null) {
                    itm = 0;
                } 
                itm = Number(itm) + 1;
                sessionStorage.setItem("icount", itm);
                if (itm > 9) {
                    itm = "9+";
                }
                $(".cart").text(function() { return itm; });
                var cart = sessionStorage.getItem("cart");
                if (cart == null) {
                    cart = new Object;
                    cart[this.id] = 0;

                }
                else {
                    cart = JSON.parse(cart);
                    if (this.id in cart) {
                        cart[this.id] = cart[this.id] + 1;
                    }
                    else {
                        cart[this.id] = 0;
                    }
                    console.log(cart);
                }
                sessionStorage.setItem("cart", JSON.stringify(cart));       
            });
        }
    });
});