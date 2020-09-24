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
        location.reload();
      }
    );
  });

  $(".create-devoured").on("submit", function(event) {
    console.log("yum");
    event.preventDefault();

    const newBurger = {
      burger_type: $("#be").val().trim(),
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
        location.reload();
      }
    );
  });
});