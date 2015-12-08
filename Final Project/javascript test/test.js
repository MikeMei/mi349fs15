$("#reorder").click(function(event) {
    $("#1").toggleClass("nodrag");

    if ($(this).text()=='Reorder')
    {
        $(this).text("Done reordering");
    } else {
        $(this).text("Reorder");
    }

    event.preventDefault();
});