moveTrump = () => {
  let trump = document.getElementById("trump");
  let x = Math.random() * (window.innerWidth - 100);
  let y = Math.random() * (window.innerHeight - 100);
  trump.style.transform = "translate(" + x + "px, " + y + "px)";
}

setInterval(moveTrump, 500);
