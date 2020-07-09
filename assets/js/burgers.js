$(function() {
  $(".change-devoured").on("click", function(event) {
    const id = $(this).data("id");
    const newdevoured = $(this).data("newdevoured");
    const newDevouredState = {
      devoured: newdevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to", newdevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-devoured").on("submit", function(event) {
    console.log("yum");
     // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured:0 
    };
    console.log(newBurger);
    
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});