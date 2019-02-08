$(".todo-delete-button").on("click", function(event) {
  event.stopPropagation();
  $(this)
    .parent()
    .fadeOut(500, function() {
      this.remove();
    });
});

$('input[type="text"]').on("keypress", function(event) {
  const code = event.keyCode || event.which;
  const ul = $('#todo-list');
  const html = "<li class='todo-item'><span class='todo-delete-button'>X</span>"+$(this).val()+"</li>"
  if (code === 13) {
    ul.append(html);
    $(this).val('');
  }
});
