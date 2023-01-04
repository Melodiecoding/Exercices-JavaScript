// EXO 1
let maVariableA = 10;
let maVariableB = 20;

console.log(maVariableA, maVariableB);

// Première méthode
//     <- sens de l'égalité
let tmp = maVariableA;
maVariableA = maVariableB;
maVariableB = tmp;
console.log(maVariableA, maVariableB);

// Deuxième méthode
[maVariableA, maVariableB] = [maVariableB, maVariableA];
console.log(maVariableA, maVariableB);

// EXO 2
let nom = "Toto";
let age = 30;
let homme = true;

console.log(nom, age, homme);

// EXO 3
function minuteToSecond(minutes) {
    return minutes * 60;
}
console.log(minuteToSecond(4));

// EXO 4
function inc(nbr) {
    return ++nbr;
}
console.log(inc(5));

//  EXO 5
function surf(base, hauteur) {
    return (base * hauteur) / 2;
}
console.log(surf(8, 4));

// EXO 6
function reverseString(str) {
    const characters = str.split(""); // cree un tableau a partir de chaque caractere de la chaine de caractere
    const reversedChars = characters.reverse() // retourne le tableau
    return reversedChars.join(""); // transforme le tableau en chaine de caractere
}    

// EXO 7
function max(nbr1, nbr2, nbr3) {
    return Math.max(nbr1, nbr2, nbr3);
}
console.log(max(2, 5, 1));

// EXO 8
function first(array) {
    return array[0];
}
console.log(first(['6', '9', '3']))

// EXO 9
let url = document.location.href;
 console.log('URL :' + url)

//  MÉTHODE MANU

console.log(`URL : ${url}`)

// BONUS
let a = 4;
let b = 6;
console.log(`a + b = ${a} + ${b} = ${a + b}`)
console.log("a + b =" + a + " + " + b + " = " + (a + b))

// EXO 10
function reste(nbr, nbr2) {
    return reste = (nbr % nbr2);
}
console.log(reste (4, 3))

// EXO 11
function check(nbr, nbr2) {
    //return nbr + nbr2 <100;
    if (nbr + nbr2 <100) {
        return true;
    }
    else {
        return false;
    }
}
console.log(check (50, 15))

// EXO 12
function heureSeconde(heure) {
    return heure * 3600;
}
console.log(heureSeconde (7))

// EXO 13
function checking(nbr) {
    return nbr <= 0;
}
console.log(checking (-6))

// EXO 14
function equal(nbr1, nbr2) {
    return nbr1 == nbr2;
}
console.log(equal (5, '5'))

// EXO 15
function isDiv(nbr) {
    return nbr % 5 === 0;
}
console.log(isDiv (100))

// EXO 16
function convertHm(heure, minute) {
    return (heure * 3600) + (minute * 60);
}
console.log(convertHm (10, 2))

// EXO 17
function reverseTab(array) {
    let result = [];
    while (array.lenght){
        result.push(array.pop());
    }
    return result;
}
console.log(reverseTab (['1','2','3','4','5']));


// EXO 18
function last(array) {
    return array.pop();
}
console.log(last (['1', '2', '3']));


// EXO 19
function checkEqual(a, b) {
    return a === b;
}
console.log(checkEqual (10, 10));


// EXO 20
function isEmpty(channel) {
    return channel == "";
}
console.log(isEmpty (""));