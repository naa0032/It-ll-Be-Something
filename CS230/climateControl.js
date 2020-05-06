function climateSelection(){
  document.getElementById("climateDropdown").classList.toggle("show");
}

function displayFunction(){
  var a, i;
  div = document.getElementById("climateDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
      a[i].style.display = "";

  }
}
