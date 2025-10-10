/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/
function isPalindroma(word){
    //Inverto e controllo se è uguale 
    const wordReverse = word.split('').reverse().jion('');
    return word === wordReverse;
}

