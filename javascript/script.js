console.log('JQUERY LOADED', $)

function surSelectionCharacter(e){
	console.log('SELECTION DE ', e);
}

$(".character").bind("click", surSelectionCharacter);

