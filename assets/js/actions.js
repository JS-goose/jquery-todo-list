$("ul").on("click", "li", function(event) {
  $(this).toggleClass("deleted");
});

$("ul").on("click", "span", function(event) {
  $(this).fadeOut(500, function() {
    $(this)
      .parent()
      .remove();
  });
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
