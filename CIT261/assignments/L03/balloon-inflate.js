// window.addEventListener("ArrowUp", () => {
//      console.log("You knocked?");
// });




// window.addEventListener("keydown", event => {
//      if (event.key == "v") {
//           document.body.style.background = "violet";
//      }
// });

// window.addEventListener("keyup", event => {
//      if (event.key == "v") {
//           document.body.style.background = "";
//      }
// });

// window.addEventListener("keydown", function (e) {
//      const up = document.getElementById('balloon').style.fontSize = '40px';
//      console.log(e.keyCode);
// });

window.addEventListener("keydown", event => {
     if (event.keyCode == "38") {
          document.body.style.fontSize = "30px";
     }
});

// window.addEventListener("keyup", event => {
//      if (event.keyCode == "38") {
//           document.body.style.background = "white";
//      }
// });