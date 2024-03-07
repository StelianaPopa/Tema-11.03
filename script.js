

// Ex 1) Sa se creeze o variabila reprezentand numărul de produse pe care le are un user în cos. Daca numărul de produse este peste 5 ( inclusiv ) afișează în consola “Ai transport gratuit”.

let produseDinCos = 10;
console.log("Ai transport gratuit");

// Ex 2) Sa se creeze o variabila reprezentand parola userului curent (ca valoarea a variabilei puneti orice string, ex: "pisicutsa123"). Apoi sa se afiseze in consola "Lungimea parolei este de X caractere"

let userPassword = "pisicuta123";
console.log(`Lungimea parolei este de ${userPassword.length} caractere`);

// Ex 3) Daca lungimea parolei este mai mare decat 8 sa se afiseze in consola "Puternica", altfel sa afiseze in consola "Slaba"

if (userPassword.length > 8){
    console.log("Parola este puternica");
} else {
    console.log("Parola este slaba");
}

// Ex 4) Sa se creeze o variabila reprezentand numărul de produse pe care le are un user în cos. Daca numărul de produse este peste 5 afișează în consola “Ai transport gratuit”, altfel sa se afișeze “Mai adauga X produse ca sa ai transport gratuit”. X reprezintă diferența pana la 5.

let cosProduse = 2;
if (cosProduse >= 5) {
    console.log("Ai transport gratuit");
} else {
    console.log(`Mai adauga ${5 - cosProduse} produse ca sa ai transport gratuit`)
};

// Ex 5) Sa se creeze o funcție care primește un parametru ( știm ca e de tip number ), iar functia sa returneze valorea parametrului plus 10

let calculeazaParametruPlus10 = (parametru) => {
    return parametru + 10;
};
let parametrulUnu = 50;
let parametrulDoi = 100;
let parametrulTrei = calculeazaParametruPlus10(parametrulUnu);
let parametrulPatru = calculeazaParametruPlus10(parametrulDoi);
console.log(parametrulTrei);
console.log(parametrulPatru);

// Ex 6) Sa se creeze o funcție care primește un parametru ( știm ca e de tip number ), iar functia sa returneze valorea parametrului inmultita cu 3

let a = 100;
let multipluDeTrei = (p) => {
    return p * 3;
};
console.log(multipluDeTrei(a));

// Ex 7) Sa se creeze o funcție care primește doi parametrii ( știm ca amandoi de tip number ), iar functia sa returneze diferenta lor

let calculeazaDiferentaDintre = (pUnu, pDoi) => {
    let diferenta = pUnu - pDoi;
    return diferenta;
};
let numarulUnu = 100;
let numarulDoi  = 50;
let numarulTrei = 30;
console.log(calculeazaDiferentaDintre(numarulUnu, numarulDoi));
console.log(calculeazaDiferentaDintre(numarulUnu, numarulTrei));

// Ex 8) Sa se creeze o funcție care primește un parametru ( știm ca e de tip number ), iar functia sa returneze true dacă valoarea parametrului este mai mai mare decât 5, iar în caz contrar sa returneze false.

let esteMaiMare = (x) => {
if (x > 5) { return true;}
else { return false};
};
let varsta = 10;
console.log(esteMaiMare(varsta));

// Ex 9) Sa se creeze o funcție care primește doi parametrii ( știm ca amandoi sunt de tip number ), iar functia sa returneze true dacă suma celor doi este mai mai mare decât 10, iar în caz contrar sa returneze false.

let esteMaiMareSuma = (x1, x2) => {
    let sumaX1X2 = x1 + x2;
    if (sumaX1X2 > 10) { return true;}
    else { return false};
    };
let nrBucatiProdus1 = 5;
let nrBucatiProdus2 = 3;
console.log(esteMaiMareSuma(nrBucatiProdus1, nrBucatiProdus2));

// Ex 10) Sa se creeze o funcție care primește un parametru ( știm ca e de tip string ). Funcția sa returneze lungimea lui. De exemplu, dacă apelam funcția cu parametrul “Hello”, functia sa returneze 5

let masoaraLungimea = (lungimeParametru) => {
    let lungime = lungimeParametru.length;
    return lungime;
};

let salut = "Hello";
console.log(masoaraLungimea(salut));
let numaraCaracterele = "Oare cate caractere am folosit aici?";
console.log(masoaraLungimea(numaraCaracterele));