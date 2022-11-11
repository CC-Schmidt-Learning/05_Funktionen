"use strict";

/***** Funktionen 01 *****/

//1. Kapselung von Codeblöcken


// Funktionsrumpf (body) | Callee
// function test()
// {
    // console.log("Genieß deinen Tag, Hind");
// }

//Funktionsaufruf (call) 
// test();

// 2a Parametisierung + Datenübergabe von INNEN //



// ausgabeName();

// function ausgabeName() {
    // let personName= prompt("put your name in here");
    // console.log("Genieß deinen Tag," +personName);
// };

// console.log(personName);

// ausgabeName(prompt("insert your name here")); //Parameter ist das Eingangstor und Argumente sind Daten für Parameter

// function ausgabeName(personNames) {
    // console.log("Genieß deinen Tag," + personNames)
// };

// ausgabeName(prompt("insert your name here"), prompt("insert your lastname here")); //Parameter ist das Eingangstor und Argumente sind Daten für Parameter

// function ausgabeName(firstName, familyName) {
    // console.log("Genieße deinen Tag," + firstName + " " + familyName);
// };

 // Vorbereitung 

 //ausgabeName(prompt("insert your name here"), prompt("insert your lastname here")); //Parameter ist das Eingangstor und Argumente sind Daten für Parameter
 
 function ausgabeName(firstName, familyName) {
    const gap=" "; 
    const outputstr="Hallo"+ gap  + firstName + gap + familyName + "!";

 console.log(outputstr);
 };

  //Postualat: one function = one job (uncle Bob)
 // SRP single responsibility principle 

 outPut(prompt("give me some text"));

function outPut(outPutData) {
    alert(outPutData);
};

