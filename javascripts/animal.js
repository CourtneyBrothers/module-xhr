"use strict";

require("./module-xhr");

// module.exports.animalJSON =() => {
//     const animalReq = new XMLHttpRequest();
//     animalReq.addEventListener("load", parseCarnivore);
//     animalReq.open("GET", "JSON/carnivore.json");
//     animalReq.send(); 
// };

// const parseCarnivore = () => {
//     const carnivoreArray = JSON.parse(event.target.responseText).carnivores;
//     //for (let i = 0; i < carnivoreArray.length; i++) {
//         //let arrayWithJson = messageController.addNewMessage(carnivores[i]); 
//         //output.updateDom(arrayWithJson);
//     //}      
// };

let carnivores = [];

module.exports.loadCarnivores = function(callbackToInvoke) {
  const loader = new XMLHttpRequest();
  loader.open("GET","JSON/carnivore.json");
  loader.send();
//where should the GET be?
  loader.addEventListener("load", function() {


    // Set the value of the private array
    
    carnivores = JSON.parse((event.target.responseText));
    console.log("event target", event.target.responseText);
    console.log("carnivores",carnivores);
    
    callbackToInvoke(carnivores);
    // Now exeute the callback function (`callbackToInvoke`) so that the caller knows that the process is complete. Make sure to pass the carnivore array as an argument.
  });
};

