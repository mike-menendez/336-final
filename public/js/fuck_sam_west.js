// Set cart value and auth status

$(document).ready(function() {
    var itm = sessionStorage.getItem("icount");
    if (itm == null) {
        itm = 0;
    } else if (itm > 9) {
        itm = "9+";
    }
    $(".cart").text(function() { return itm; });

    var auth = sessionStorage.getItem("auth");

    if (auth == "true") {
        $(".sin").text(function() { return "Sign Out"; });
        $(".sin").attr("href", "/");
        $(".sin").on("click", function() {
            sessionStorage.removeItem("auth");
            Swal.fire({
                title: "You have been signed out\nTaking you home!",
                icon: 'success',
                timer: 2000,
                timerProgressBar: true,
                onBeforeOpen: () => {
                    Swal.showLoading();
                    timerInterval = setInterval(() => {
                        Swal.getContent().querySelector('b')
                            .textContent = Swal.getTimerLeft();
                    }, 100);
                },
                onClose: () => {
                    clearInterval(timerInterval);
                }
            }).then(function() {
                setTimeout(() => { window.location.replace("https://final-cst336-mmenendez.herokuapp.com/"); }, 2000);
            });
        });
    } else {
        $(".ap").remove();
    }

    $(".lbtn").on("click", function() {
        var username = $(".uname").val();
        console.log("Uname:", username);
        var password = $(".pass").val();
        console.log("Pass:", password);

        $.ajax({
            url: "https://final-cst336-mmenendez.herokuapp.com/auth",
            type: "POST",
            data: { username: username, password: password },
            success: function(res) {
                console.log(res.auth);
                var x;
                if (res.auth == true) {
                    x = {
                        title: "Login Success!",
                        icon: 'success',
                        showConfirmButton: true,
                        confirmButtonText: 'Take Me Home'
                    };
                    sessionStorage.setItem("auth", "true");
                } else {
                    x = {
                        title: "Login Failure",
                        text: 'Invalid Username or Password',
                        icon: 'error',
                        showConfirmButton: true,
                        confirmButtonText: 'Ok'
                    };
                    delete sessionStorage.auth;
                }
                Swal.fire(x).then(function() {
                    if (x.icon == 'error') {
                        window.location.reload();
                    } else {
                        window.location.replace("https://final-cst336-mmenendez.herokuapp.com/");
                    }
                });
            }
        });
    });

    // Search, requires preforming the query (handled in the router via POST), appending the HTML in a card like BreweryAPI
    $(".search").on("click", function() {

    });

});