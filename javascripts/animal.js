"use strict";

require("./module-xhr");



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
