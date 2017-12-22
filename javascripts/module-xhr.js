"use strict";
/*jslint sub: true */

const animal = require("./animal");

function showCarnivores(carnivores) {
  
  
  console.log("show carnivores", carnivores);
  console.log("car.car",carnivores.carnivores);
  console.log("array",Array.from(carnivores.carnivores));
  let carnivoreArray = Array.from(carnivores.carnivores);
  for (let i=0; i < carnivoreArray.length; i++){
    let output = document.getElementById("output");
    output.innerHTML += `${carnivoreArray[i].animals} `;
  }
  
}

function showHerbivores() {}

animal.loadCarnivores(showCarnivores);