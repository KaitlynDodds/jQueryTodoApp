// check off specific to-dos by clicking
$("ul").on("click", "li", function() {
    // add completed class
    $(this).toggleClass("completed");
});

// delete a todo when 'X' is clicked
$("ul").on("click", "span", function(event) {
    // fadeout the parent li of the span (removes entire todo)
    $(this).parent().fadeOut(1000, function() {
        // remove li from DOM
        $(this).remove();
    });
    // stop event bubbling
    event.stopPropagation();
});

// create new todo
$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        // take text from input
        var todo = $(this).val();
        // create new li
        var li = `<li><span><i class='fa fa-trash'></i></span> ${todo}</li>`
        // add new li to ul
        $("ul").append(li);
        // clear input
        $(this).val("");
    }
});

// toggle 'Add New Todo' input
$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
});
