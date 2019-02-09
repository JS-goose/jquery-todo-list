/* .on and .click work very similarly however .on will add event listeners 
to all CURRENT and FUTURE children .click will add listeners for CURRENT 
children ONLY */
$("ul").on("click", "li", function(event) {
  $(this).toggleClass("deleted");
});

$("ul").on("click", "span", function(event) {
  $(this).fadeOut(500, function() {
    $(this)
      .parent()
      .remove();
  });
  // stops event from propagating (bubbling) up to parents
  event.stopPropagation();
});

$('input[type="text"]').on("keypress", function(event) {
  const code = event.keyCode || event.which;
  const ul = $("#todo-list");
  const html =
    "<li class='todo-item'><span class='todo-delete-button'><i class='fa fa-times' aria-hidden='true'></i></span>" +
    $(this).val() +
    "</li>";
  if (code === 13) {
    ul.append(html);
    $(this).val("");
  }
});

$("#todo-add-button").click(function(event) {
  const input = $('input[type="text"]');

  if (input.css("display") === "none") {
    input.fadeIn();
    $(this).html("<span>&#10515;</span>");
  } else {
    input.fadeOut();
    $(this).html("<span>&#10514;</span>");
  }
});
