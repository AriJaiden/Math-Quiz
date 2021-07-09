function addUser() {
var player1=document.getElementById("player-1").value;
var player2=document.getElementById("player-2").value;
localStorage.setItem("name1", player1);
localStorage.setItem("name2", player2);

window.location="game.html";
}