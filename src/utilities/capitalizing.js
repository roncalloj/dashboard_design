export function capitalizeWords(word) {
	//const alphabeticLetter = /[a-zA-Z]/;
	return word
		.split(' ') // Divide la cadena en un array de palabras
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitaliza la primera letra de cada palabra
		.join(' '); // Une las palabras de nuevo en una cadena
}
