$(function(){
    $(".devour").on("click", function(event) {
        var id = $(this).data("id");
        var idObj = { id: id };

        console.log(idObj);

        $.ajax({
            url: "/api/burgers/" + id, 
            type: "PUT",
            data: idObj
        }).then(
            function() {
                console.log("devoured");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $("#submit_burger").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
        burger_name: $("#burg").val().trim()
        };

        alert(newBurger);

        console.log(newBurger)

        // Send the POST request.
        $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
        }).then(
        function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        });
    })
})