function makeElementInTable(row){
  var columnElement = document.createElement("td");
  row.appendChild(columnElement);
  return columnElement;
}

function addRow(){
  //var newRow = document.createElement("tr");
  var table = document.getElementById("gardenGrid");
  var tbody = table.querySelector('tbody') || table;

  var rows = tbody.getElementsByTagName('tr');

  for(var i = 0; i < rows.length; i++){
    var newRow = document.createElement("td");
    newRow.setAttribute("type", "image");
    newRow.setAttribute("contenteditable", "false");
    new.appendChild(firstName);
  }

  var count = tbody.getElementsByTagName('tr').length + 1;
  tbody.appendChild(newRow);
}

function deleteRow(){
  var table = document.getElementById("gardenGrid");
  var tbody = table.querySelector('tbody') || table;
  var rows = tbody.getElementsByTagName("tr");
  var row = rows[rows.length-1];

  tbody.removeChild(row);

  for (var i = 1; i < rows.length; i++) {
    var currentRow = rows[i];
    currentRow.childNodes[0].innerText = i.toLocaleString();
  }
}
