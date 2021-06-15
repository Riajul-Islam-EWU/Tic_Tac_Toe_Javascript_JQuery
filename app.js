var player_status = confirm("Ready to play?");
if (player_status) {
  alert("Let's start");
} else {
  alert("Try later");
  document.getElementById("main_box").style.display = "none";
  document.getElementById("btn_reload").style.display = "block";
}
