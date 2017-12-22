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
  loader.addEventListener("load", function() {
    
    carnivores = JSON.parse((event.target.responseText));
    
    callbackToInvoke(carnivores);
   
  });
};

let herbivores = [];

module.exports.loadHerbivores = function(callbackToInvoke) {
  const loader = new XMLHttpRequest();
  loader.open("GET","JSON/herbivore.json");
  loader.send();
  loader.addEventListener("load", function() {
    
    herbivores = JSON.parse((event.target.responseText));
    
    callbackToInvoke(herbivores);
   
  });
};
