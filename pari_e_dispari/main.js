/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//Chiedo all'utente di scegliere pari o dispari
const choice = prompt('Scegli tra pari e dispari');

//Chiedo all'utente di scegliere un numero da 1 a 5
const numUtente = Number(prompt('Scegli un numero tra 1 e 5'));

//Genero un numero intero casuale tra un valore minimo e uno massimo
const numComputer = Math.floor(Math.random() * 5) + 1;

//Somma dei due numeri
const sum = numUtente + numComputer

