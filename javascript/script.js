console.log('JQUERY LOADED', $)

$(".character").bind("click", surSelectionCharacter);

function surSelectionCharacter(e){
	console.log('SELECTION DE ', e);
}