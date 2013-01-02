var effects = new Array();
var effectform;

function Effect(type, twinkle, trail, colour, fadeColour) {
	this.type = type;
	this.twinkle = twinkle;
	this.trail = trail;
	this.colour = colour;
	this.fadeColour = fadeColour;
}

function addEffect() {
	effects.push(new Effect('Ball', false, false, 'White', 'None'));
	renderEffects();
}

function removeEffect(id) {
	effects.splice(id, 1);
	renderEffects();
}

function renderEffects() {
	$('section#effects').html('');
	for (var i = 0; i < effects.length; i++) {
		$('section#effects').append(
				'<section id="effect' + i + '">' +
				'    <h4>Effect ' + (i + 1) +
				'        <button id="remove-effect" name="' + i + '" class="btn pull-right">' + 
				'            <i class="icon-remove-sign"></i>' +
				'        </button>' +
				'    </h4>' +
				effectform +
				'</section>'
		);
		
		$('#effect' + i + ' #type').val(effects[i].type);
		$('#effect' + i + ' #twinkle').prop('checked', effects[i].twinkle);
		$('#effect' + i + ' #trail').prop('checked', effects[i].trail);
		$('#effect' + i + ' #colour').val(effects[i].colour);
		$('#effect' + i + ' #fade-colour').val(effects[i].fadeColour);
	}
}