$(document).ready(function() {
    if (window.sessionStorage.getItem("auth") != "true") {
        window.location("https://final-cst336-mmenendez.herokuapp.com/");
    }
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