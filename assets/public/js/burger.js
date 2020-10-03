$(function() {

  $(".submitBtn").on("click", function(event) {
      event.preventDefault();

    var newDevoured = {
      burger_style: $("#form").val().trim(),
      devoured: {devoured:false}
    };

    $.ajax("/api/burger/", {
      type: "POST",
      data: newDevoured
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".devoured").on("click", function(event) {

    var id = $(this).parent().attr('id');
    var changeDevoured = $(this).data("devoured");
    var newDevouredState = {
    devoured: {devoured:true}
  };

  $.ajax("/api/burger/" + id, {
    type: "PUT",
    data: newDevouredState
  }).then(
    function() {
      console.log("changed devoured to", changeDevoured);
      location.reload();
    }
  );
});
});