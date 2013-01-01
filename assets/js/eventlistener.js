$("form#settings input#displayname").keyup(function() {
	var text = $("input#displayname").val();
	setDisplayName(text);
	updateCode();
});

$("form#settings input#power").change(function() {
	var text = $("input#power").val();
	setPower(text);
	updateCode();
});

$("form#settings input#amount").change(function() {
	var text = $("input#amount").val();
	setAmount(text);
	updateCode();
});

/** Buttons **/

$("h3#settings button").click(function() {
	$("form#settings")[0].reset();
	setDisplayName('');
	setPower('');
	setAmount(1);
	meta = false;
	updateCode();
});

$('h3#effects button').click(function() {
	addEffect();
});

$('section#effects button#remove-effect').live('click', function() {
	var id = $(this).parent('h4').parent('section').attr("id");
	removeEffect(id.replace('effect', ''));
});

$("h3#output button").click(function() {
	updateCode();
});