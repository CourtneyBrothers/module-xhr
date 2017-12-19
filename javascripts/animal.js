"use strict"



module.exports.animalJSON =() => {
    const animalReq = new XMLHttpRequest();
    animalReq.addEventListener("load", parseCarnivore);
    animalReq.open("GET", "JSON/carnivore.json");
    animalReq.send(); 
};

const parseCarnivore = () => {
    const carnivoreArray = JSON.parse(event.target.responseText).carnivores;
    //for (let i = 0; i < carnivoreArray.length; i++) {
        //let arrayWithJson = messageController.addNewMessage(carnivores[i]); 
        //output.updateDom(arrayWithJson);
    //}      
};

let carnivores = [];

loadCarnivores = function(callbackToInvoke) {
  const loader = new XMLHttpRequest();

  loader.addEventListener("load", function() {
    // Set the value of the private array
    carnivores = JSON.parse(this.responseText);

    // Now exeute the callback function (`callbackToInvoke`) so that the caller knows that the process is complete. Make sure to pass the carnivore array as an argument.
  });
};

module.exports = { loadCarnivores };