/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".com", ".org"];
let generador = [];

for (let p = 0; p < pronoun.length; p++) {
  for (let a = 0; a < adj.length; a++) {
    for (let n = 0; n < noun.length; n++) {
      for (let d = 0; d < domain.length; d++) {
        generador.push(" " + pronoun[p] + adj[a] + noun[d] + domain[d]);
      }
    }
  }
}
console.log(generador);
