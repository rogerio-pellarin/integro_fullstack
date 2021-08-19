const isPalindrome = (input)=> {
    
    let text = cleanInput(input);
    let isPalindrome = true;
    
    // Utilizo un bucle para verificar que coinciden las letras 
    for(let i = 0; i < text.length; i++){
        let frontLetter = text[i];
        let backLetter = text[text.length-1-i];
        if(frontLetter !== backLetter){
            isPalindrome = false;
        }
    }
    return isPalindrome;
}

const cleanInput = (input)=>{
    let text = input;
    // Se convierte texto a minusculas
    text = text.toLowerCase();

    // Se quitan los ascentos
    text = text.normalize('NFD').replace(/[\u0300-\u036f]/g,"");

    // Se eliminan las comas
    text = text.replace(/,/g, '');

    // Se eliminan todos los espacios de la frase
    text = text.replace(/\s+/g, '');

    return text;
}

let input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
console.log(isPalindrome(input));