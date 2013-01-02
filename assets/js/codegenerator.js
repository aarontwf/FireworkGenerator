var lines = new Array();

var meta = false;
var displayName = '';
var power = '';
var amount = 1;

/* Lines and code updater */

function addLine(line) {
	lines[lines.length] = line;
}

function buildLines() {
	addLine('public static ItemStack getFirework() {');
	addLine('    ItemStack stack = new ItemStack(Material.FIREWORK, ' + amount + ');');
	
	if (meta) {
		addLine('    FireworkMeta meta = (FireworkMeta) stack.getItemMeta();');
		addLine('');
	}
	
	$.each(effects, function(index, value) { 
		var effectID = 'effect' + (index + 1);
		addLine('    Builder ' + effectID + ' = FireworkEffect.builder();');
		addLine('    ' + effectID + '.with(Type.' + value.type + ');');
		if (value.twinkle) addLine('    ' + effectID + '.withFlicker();');
		if (value.trail)  addLine('    ' + effectID + '.withTrail();');
		addLine('    ' + effectID + '.withColor(Color.' + value.colour + ');');
		if (value.fadeColour != 'None') addLine('    ' + effectID + '.withFade(Color.' + value.fadeColour');');
		addLine('    meta.addEffect(' + effectID + '.build());');
		addLine('');
	});
	
	if (displayName != '') {
		addLine('    meta.setDisplayName("' + displayName + '");');
	}
	
	if (power != '') {
		addLine('    meta.setPower(' + power + ');');
	}
	
	addLine('    return stack;');
	addLine('}');
}

function updateCode() {
	$('pre.generator-output').html('');
	meta = power != '' || displayName != '' || effects.length !== 0;
	buildLines();
	
	for (i = 0; i < lines.length; i++) {
		$('pre.generator-output').append(lines[i] + '\n');
	}
	
	lines = [];
	prettyPrint();
	logDebug('Code updated.');
}

/* Firework methods */

function setDisplayName(string) {
	displayName = string;
	meta = string != null;
}

function setPower(int) {
	power = int;
}

function setAmount(int) {
	amount = int;
}