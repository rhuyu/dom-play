//alert("Hi from Dom-Play");

/*
- With a single click, highlight (bold or otherwise) all lines for a specific actor in a play

- Un-highlight (normal or otherwise) all lines from all other actors in the play

- The function(s) created to do the work must accommodate any number of actors, and any number of additional lines added to the page

- The page must do the work without page re-loads (i.e. it must be done via JavaScript and the DOM)

- The page may not use a third party API (jQuery, for example)

- HTML "hooks" may be added to the page, meaning you can edit the HTML to enable your scripts to perform properly*/ 

//document.querySelector(".hamlet").style.backgroundColor= "yellow";

/*function highlight(el) {
    if (el.style.backgroundColor == 'white') {
      el.style.backgroundColor = 'blue';
    } else {
      el.style.backgroundColor = 'white';
    }
  }
*/

function highlightActor(actor){
    //alert("The current actor is: " + actor);
    for (const mySpan of spans){
      if(actor == mySpan.dataset.actor){//current actor
        mySpan.style.backgroundColor = 'blue';
      }else{ //other actor
        mySpan.style.backgroundColor = 'white';
      } 
    }
} 
  
const spans = document.querySelectorAll("#play span");

console.log(spans);

for (const mySpan of spans){
    //mySpan.addEventListener("click", myAlert);
    mySpan.addEventListener("click", function(ev){
      highlightActor(mySpan.dataset.actor);
    });
}