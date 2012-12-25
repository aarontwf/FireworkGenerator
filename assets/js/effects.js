var effects = new Array();

function Effect(type, twinkle, trail, colour, fadeColour) {
	this.type = type;
	this.twinkle = twinkle;
	this.trail = trail;
	this.colour = colour;
	this.fadeColour = fadeColour;
}

function addEffect() {
	effects.push(new Effect('Ball', false, false, 'Silver', 'None'));
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
				'    <form id="options">' +
				'        <fieldset id="column1">' +
				'            <label for="type">Type</label>' +
				'            <select name="type">' +
				'                <option>Ball</option>' +
				'                <option>Ball Large</option>' +
				'                <option>Star</option>' +
				'                <option>Burst</option>' +
				'                <option>Creeper</option>' +
				'            </select>' +
				'            <label for="twinkle" class="larger">' +
				'                Twinkle' +
				'                <input type="checkbox" name="twinkle" class="pull-right"></input>' +
				'            </label>' +
				'            <label for="trail" class="larger">' +
				'                Trail' +
				'            <input type="checkbox" name="trail" class="pull-right"></input>' +
				'            </label>' +
				'        </fieldset>' +
				'        <fieldset id="column2">' +
				'            <label for="colour">Colour</label>' +
				'            <select name="colour">' +
				'                <option>White</option>' +
				'                <option>Silver</option>' +
				'                <option>Grey</option>' +
				'                <option>Black</option>' +
				'                <option>Red</option>' +
				'                <option>Maroon</option>' +
				'                <option>Yellow</option>' +
				'                <option>Olive</option>' +
				'                <option>Lime</option>' +
				'                <option>Green</option>' +
				'                <option>Aqua</option>' +
				'                <option>Teal</option>' +
				'                <option>Blue</option>' +
				'                <option>Navy</option>' +
				'                <option>Fuchsia</option>' +
				'                <option>Purple</option>' +
				'                <option>Orange</option>' +
				'            </select>' +
				'            <label for="fade-colour">Fade Colour</label>' +
				'            <select name="fade-colour">' +
				'                <option>None</option>' +
				'                <option>White</option>' +
				'                <option>Silver</option>' +
				'                <option>Grey</option>' +
				'                <option>Black</option>' +
				'                <option>Red</option>' +
				'                <option>Maroon</option>' +
				'                <option>Yellow</option>' +
				'                <option>Olive</option>' +
				'                <option>Lime</option>' +
				'                <option>Green</option>' +
				'                <option>Aqua</option>' +
				'                <option>Teal</option>' +
				'                <option>Blue</option>' +
				'                <option>Navy</option>' +
				'                <option>Fuchsia</option>' +
				'                <option>Purple</option>' +
				'                <option>Orange</option>' +
				'            </select>' +
				'        </fieldset>' +
				'    </form>' +
				'</section>'
		);
	}
}