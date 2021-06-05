document.querySelector(".btn").addEventListener("click", function () {
  document.querySelector("h1").style.fontSize = "100px";
  document.querySelector("h1").style.backgroundColor = "magenta";
  document.querySelector("h1").style.margin = "0px";
  document.querySelector("h1").style.color = "white";
  document.querySelector("h1").style.textAlign = "center";
});

document.querySelector(".reset").addEventListener("click", function () {
  document.querySelector("h1").style.fontSize = "2em";
  document.querySelector("h1").style.backgroundColor = "#fff";
  document.querySelector("h1").style.margin = "0px";
  document.querySelector("h1").style.color = "#000";
  document.querySelector("h1").style.textAlign = "left";
});
