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
	updateCode();
});

$("h3#output button").click(function() {
	updateCode();
});

/** Effects **/
$('section#effects button#remove-effect').live('click', function() {
	var id = $(this).parent('h4').parent('section').attr("id");
	removeEffect(id.replace('effect', ''));
	updateCode();
});

$("form#options select#type").live('change', function() {
	var effect = $(this).closest('section').attr('id');
	var value = $(this).val();
	effects[effect.replace('effect', '')].type = value;
	updateCode();
});

$("form#options input#twinkle").live('change', function() {
	var effect = $(this).closest('section').attr('id');
	var value = $(this).prop('checked');
	effects[effect.replace('effect', '')].twinkle = value;
	updateCode();
});

$("form#options input#trail").live('change', function() {
	var effect = $(this).closest('section').attr('id');
	var value = $(this).prop('checked');
	effects[effect.replace('effect', '')].trail = value;
	updateCode();
});

$("form#options select#colour").live('change', function() {
	var effect = $(this).closest('section').attr('id');
	var value = $(this).val();
	effects[effect.replace('effect', '')].colour = value;
	updateCode();
});

$("form#options select#fade-colour").live('change', function() {
	var effect = $(this).closest('section').attr('id');
	var value = $(this).val();
	effects[effect.replace('effect', '')].fadeColour = value;
	updateCode();
});