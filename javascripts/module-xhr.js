"use strict";

const animal = require("./animal");

function showCarnivores(carnivores) {
  let output = document.getElementById("output").innerHTML = carnivores;
}

function showHerbivores() {}

animal.loadCarnivores(showCarnivores);