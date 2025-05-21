import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let dominio = ['.com', '.es']
  
  const dominioFinal = []
  for (let pronouns  = 0; pronouns < pronoun.length; pronouns++) {
    for (let adjs = 0; adjs < adj.length; adjs++) {
      for (let nouns = 0; nouns < noun.length; nouns++) {
        for (let dominios = 0; dominios < dominio.length; dominios++) {
           dominioFinal.push (pronoun[pronouns] + adj[adjs] + noun[nouns] + dominio[dominios])
          
        }
        
      }
      
    }
    
  }
  
  console.log(dominioFinal)
  console.log("Hello Rigo from the console!");
  document.getElementById ("dominioFinal").textContent = dominioFinal;
};
