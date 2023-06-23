var root = document.querySelector(":root");

var orange = getComputedStyle(root).getPropertyValue("--orange");
var dark_grey = getComputedStyle(root).getPropertyValue("--dark-grey");
var divElement = document.querySelector(".rating-point");
var saveLoc;
function onClicky(div) {
      if (saveLoc != null) {
            saveLoc.style.backgroundColor = '';
      }
      saveLoc = div;
      div.style.backgroundColor = orange;
      div.style.color = "white";
      console.log(saveLoc.innerHTML);
      
}

function onSubmit() {
      if (saveLoc == null) {
            alert("Please select a rating");
            return;
      }
      var rating = saveLoc.innerHTML;
      document.querySelector('#pointed').innerHTML = rating;
      document.querySelector(".warper").style.display = "none";
      document.querySelector(".submit-state").style.display = "";
}
