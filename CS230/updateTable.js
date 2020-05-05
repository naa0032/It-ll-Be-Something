function makeElementInTable(row){
  var columnElement = document.createElement("td");
  row.appendChild(columnElement);
  return columnElement;
}

function addRow(){
  //var newRow = document.createElement("tr");
  var rows = tbody.getElementsByTagName("tr");
  for(var i = 0; i < rows.length; i++){
    var numericColumn = makeElementInTable(newRow);
    var firstName = document.createElement("td");
    firstName.setAttribute("type", "image");
    firstName.setAttribute("contenteditable", "false");
    firstNameColumn.appendChild(firstName);
  }
  var table = document.getElementById("gardenGrid");
  var tbody = table.querySelector('tbody') || table;
  var count = tbody.getElementsByTagName('tr').length + 1;

  tbody.appendChild(newRow);
}

function deleteRow(){
  var table = document.getElementById("gardenGrid");
  var rows = tbody.getElementsByTagName("tr");
  var row = rows[rows.length-1];
  var tbody = row.parentNode;
  tbody.removeChild(row);

  for (var i = 1; i < rows.length; i++) {
    var currentRow = rows[i];
    currentRow.childNodes[0].innerText = i.toLocaleString();
  }
}
