"use strict";
/*jslint sub: true */

const animal = require("./animal");

function showCarnivores(carnivores) {
  
  let carnivoreArray = Array.from(carnivores.carnivores);
  for (let i=0; i < carnivoreArray.length; i++){
    let output = document.getElementById("output");
    output.innerHTML += `${carnivoreArray[i].animals} `;
  }
  
}
animal.loadCarnivores(showCarnivores);

function showHerbivores(herbivores) {
  
  let herbivoreArray = Array.from(herbivores.herbivores);
  for (let i=0; i < herbivoreArray.length; i++){
    let output = document.getElementById("output");
    output.innerHTML += `${herbivoreArray[i].animals} `;
  }
  
}

animal.loadHerbivores(showHerbivores);
