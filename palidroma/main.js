/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/
function isPalindroma(word) {
    //Pulisco la parola, converto in minuscolo e rimuovo gli spazi
    const cleanedWord = word.toLowerCase().replace(/\s/g, '');
    //Inverto la stringa usando la catena di metodi
    // -split('') trasforma la stringa in un array di caratteri
    // -reverse() inverte l'ordine degli elementi nell'array
    // -join('') unisce i caratteri dell'array per formare la stringa invertita
    const wordReverse = cleanedWord.split('').reverse().join('');
    return cleanedWord === wordReverse;
}

const wordUser = prompt('Scrivi una parola');
if (isPalindroma(wordUser)) {
    console.log('La parola è palindroma');
} else {
    console.log('La parola non è palindroma');
}