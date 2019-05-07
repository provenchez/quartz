console.log('JQUERY LOADED', $)

var surSelectionCharacter = function(e){
	console.log('SELECTION DE ', e);
}

$(".character").bind("click", surSelectionCharacter);

console.log(this)