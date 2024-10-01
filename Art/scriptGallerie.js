"use-strict";

document.addEventListener("DOMContentLoaded", function() {
    //alert("Veuillez cliquez sur la tapis rouge afin de retourner au menu");
  });


  var tapis = document.getElementById("tapis");

  // Ajoutez un gestionnaire d'événements pour chaque bouton
    tapis.addEventListener("click", function() {
        window.location.href = "../index.html";});