$(".todo-delete-button").on("click", function(event) {
    event.stopPropagation();
    $(this).parent().fadeOut(500, function(){
        this.remove();
    });
});
