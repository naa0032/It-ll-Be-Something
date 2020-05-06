function makeElementInTable(row){
  var columnElement = document.createElement("td");
  row.appendChild(columnElement);
  return columnElement;
}

function addRow(){
  var newRow = document.createElement("tr");
  var table = document.getElementById("gardenGrid");
  var tbody = table.querySelector('tbody') || table;
  var rows = tbody.getElementsByTagName('tr');

  for(var i = 0; i < 4; i++){
    var newCol = document.createElement("td");
    newRow.appendChild(newCol);
    newCol.setAttribute("type", "image");
    newCol.setAttribute("contenteditable", "false");
    var image = document.createElement("img");
    image.setAttribute("src", "assets/empty-grid-component.png");
    image.setAttribute("class", "rounded float-left");
    image.setAttribute("title", "Empty Seed Element");
    newCol.appendChild(image)
    newRow.appendChild(newCol);
  }

  var count = tbody.getElementsByTagName('tr').length + 1;
  tbody.appendChild(newRow);
}

function deleteRow(){
  var table = document.getElementById("gardenGrid");
  var tbody = table.querySelector('tbody') || table;
  var rows = tbody.getElementsByTagName('tr');

  var row = rows[rows.length-1];
  tbody.removeChild(row);

  for (var i = 1; i < rows.length; i++) {
    var currentRow = rows[i];
    currentRow.childNodes[0].innerText = i.toLocaleString();
  }
}
