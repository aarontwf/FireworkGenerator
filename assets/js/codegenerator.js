var lines = new Array();
lines[0] = 'public static ItemStack getFirework() {';
lines[1] = '    ItemStack stack = new ItemStack(Material.FIREWORK, 1);';

var meta = false;
var displayName;
var power;

/* Lines and code updater */

function addLine(line) {
	lines[lines.length] = line;
}

function buildLines() {
	setDisplayName('Just Testing');
	setPower(2);
	
	if (meta) {
		addLine('    FireworkMeta meta = (FireworkMeta) stack.getItemMeta();');
		addLine('');
	}
	
	if (displayName != null) {
		addLine('    meta.setDisplayName("' + displayName + '");');
	}
	
	if (power != null) {
		addLine('    meta.setPower(' + power + ');');
	}
	
	addLine('    return stack;');
	addLine('}');
}

function updateCode() {
	$('pre.generator-output').html('');
	buildLines();
	
	for (i = 0; i < lines.length; i++) {
		$('pre.generator-output').append(lines[i] + '\n');
	}
	
	prettyPrint();
	logDebug('Code updated.');
}

/* Firework methods */

function setPower(int) {
	power = int;
	meta = int != null;
}

function setDisplayName(string) {
	displayName = string;
	meta = string != null;
}