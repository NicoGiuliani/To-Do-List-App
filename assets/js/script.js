$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
	event.stopPropagation();
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
});

$("#newTask").keydown(function(event) {
	if (event.which == 13) {
		const newTask = $(this).val();
		$(this).val("");
		$("#taskList").append(`<li><span><i class="far fa-trash-alt"></i></span>${newTask}</li>`);
	}
});

$(".fa-plus").click(function() {
	$("#newTask").fadeToggle();
});