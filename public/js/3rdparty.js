$(".btn").on("click", function() {
    var s = "";
    !isNaN(parseInt($("#form1").val().trim()), 10) ? s = "by_postal_code=" : s = "by_city=";
    $.ajax({
        method: "GET",
        url: "https://api.openbrewerydb.org/breweries?" + s + $("#form1").val().trim() + "&per_page=50",
        dataType: "json",

    }).done(function(res) {
        del();
        add(res);
    });
});

function add(res) {
    res.forEach(function(x) {
        $("body").append('<div class = "container card shadow text-center ico brews mb-5 mt-5"><div class ="center mx-auto justify-content-center m-5"><h2>' + x.name +
            '</h2><hr><p>' + x.street + '<hr><p>' + x.city + '</p><hr><a href="' + x.website_url + '">' + x.website_url + '</a></div></div>');
    });
}

function del() {
    $(".brews").remove();
}