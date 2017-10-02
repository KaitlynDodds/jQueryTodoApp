// check off specific to-dos by clicking
$("li").click(function() {
    // add completed class
    $(this).toggleClass("completed");
});

// delete a todo when 'X' is clicked
$("li span").click(function(event) {
    // fadeout the parent li of the span (removes entire todo)
    $(this).parent().fadeOut(1000, function() {
        // remove li from DOM
        $(this).remove();
    });
    // stop event bubbling
    event.stopPropagation();
});
