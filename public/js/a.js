$(document).ready(function() {
    if (window.sessionStorage.getItem("auth") != "true") {
        window.location("https://final-cst336-mmenendez.herokuapp.com/");
    }
});

$(".q1").on("click", function() {
    // Get average prices from the table

    $.ajax({
        url: "https://final-cst336-mmenendez.herokuapp.com/admin/q1",
        type: "GET"
    }).then((results) => {
        console.log(results);
        Swal.fire({
            title: 'Average Price of all items',
            text: JSON.parse(results)[0]["AVG(price)"],
            showConfirmButton: true
        });
    });
});

$(".q2").on("click", function() {
    // Get average number of instances sold
    $.ajax({
        url: "https://final-cst336-mmenendez.herokuapp.com/admin/q2",
        type: "GET"
    }).then((results) => {
        console.log(results);

        Swal.fire({
            title: "Average Number of Items Sold",
            text: JSON.parse(results)[0]["AVG(quantity)"],
            showConfirmButton: true
        });
    });
});

$(".q3").on("click", function() {
    // Get price of most frequently purchased item
    $.ajax({
        url: "https://final-cst336-mmenendez.herokuapp.com/admin/q3",
        type: "GET"
    }).then((results) => {
        console.log(results);

        Swal.fire({
            title: "Price of Most Frequently Purchased Item",
            text: JSON.parse(results)[0]["price"],
            showConfirmButton: true
        });
    });
});

$(".update").on("click", function() {
    Swal.mixin({
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2']
    }).queue([{
            title: 'Select Table',
            input: 'select',
            inputOptions: {
                items: "Items",
                users: "Users",
                order_hist: "History"
            }
        },
        {
            title: 'Query options',
            text: "Enter the Update condition as comma seperated where x = y(field to be updated, x, y)",
            input: "text"
        }
    ]).then(function(result) {
        result.value.unshift("update");
        console.log(result.value);
        $.ajax({
            url: "https://final-cst336-mmenendez.herokuapp.com/admin/update",
            type: "POST",
            data: result.value,
            success: function(res) {
                Swal.fire({
                    title: "Update completed",
                    icon: "success",
                    showConfirmButton: true
                });
            }
        });
    });
});

$(".delete").on("click", function() {
    Swal.mixin({
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2']
    }).queue([{
            title: 'Select Table',
            input: 'select',
            inputOptions: {
                items: "Items",
                users: "Users",
                order_hist: "History"
            }
        },
        {
            title: 'Delete Condition',
            text: "Enter the delete condtion in the form of (x,y)",
            input: "text"
        }
    ]).then(function(result) {
        result.value.unshift("delete");
        console.log(result.value);
        $.ajax({
            url: "https://final-cst336-mmenendez.herokuapp.com/admin/delete",
            type: "POST",
            data: result.value,
            success: function(res) {
                Swal.fire({
                    title: "Update completed",
                    icon: "success",
                    showConfirmButton: true
                });
            }
        });
    });

});

$(".create").on("click", function() {
    Swal.mixin({
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2']
    }).queue([{
            title: 'Select Table',
            input: 'select',
            inputOptions: {
                items: "Items",
                users: "Users",
                order_hist: "History"
            }
        },
        {
            title: 'Values to Insert',
            text: "Enter the values to insert with in the form of (x, y, z)",
            input: "text"
        }
    ]).then(function(result) {
        result.value.unshift("create");
        console.log(result.value);
        $.ajax({
            url: "https://final-cst336-mmenendez.herokuapp.com/admin/create",
            type: "POST",
            data: { "val": result.value },
            success: function(res) {
                Swal.fire({
                    title: "Update completed",
                    icon: "success",
                    showConfirmButton: true
                });
            }
        });
    });
});