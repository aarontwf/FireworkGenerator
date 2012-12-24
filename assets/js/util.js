function log(msg) {
	console.log('[Firework Generator] ' + msg);
}

function logInfo(msg) {
	console.info('[Firework Generator] ' + msg);
}

function logWarning(msg) {
	console.warn('[Firework Generator] ' + msg);
}

function logDebug(msg) {
	console.debug('[Firework Generator] ' + msg);
}

function logError(msg) {
	console.error('[Firework Generator] ' + msg);
}

function getValue(file, value) {
	return $(file).find(value).text();
}