window.onload = function draw(){

      var canvas = document.getElementById("canvas");
      var context = canvas.getContext("2d");

        for(var x=0.5;x<600;x+=20) {
          context.moveTo(x,0);
          context.lineTo(x,500);
        }

        for(var y=0.5; y<500; y+=20) {
          context.moveTo(0,y);
          context.lineTo(600,y);

      }

      context.strokeStyle='grey';
      context.stroke();
    }

function resize1() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = 500;
    canvas.height = 400;

    context = canvas.getContext("2d");

      for(var x=0.5;x<500;x+=20) {
        context.moveTo(x,0);
        context.lineTo(x,400);
      }

      for(var y=0.5; y<400; y+=20) {
        context.moveTo(0,y);
        context.lineTo(500,y);

    }

    context.strokeStyle='grey';
    context.stroke();
}

function resize3() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = 300;
    canvas.height = 200;

    context = canvas.getContext("2d");

      for(var x=0.5;x<300;x+=20) {
        context.moveTo(x,0);
        context.lineTo(x,200);
      }

      for(var y=0.5; y<200; y+=20) {
        context.moveTo(0,y);
        context.lineTo(300,y);

    }

    context.strokeStyle='grey';
    context.stroke();
}

function resize2() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = 400;
    canvas.height = 400;

    context = canvas.getContext("2d");

      for(var x=0.5;x<400;x+=20) {
        context.moveTo(x,0);
        context.lineTo(x,400);
      }

      for(var y=0.5; y<400; y+=20) {
        context.moveTo(0,y);
        context.lineTo(500,y);

    }

    context.strokeStyle='grey';
    context.stroke();
}

function resizeOriginal() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = 600;
    canvas.height = 360;

    context = canvas.getContext("2d");

    for(var x=0.5;x<600;x+=20) {
      context.moveTo(x,0);
      context.lineTo(x,360);
    }

    for(var y=0.5; y<360; y+=20) {
      context.moveTo(0,y);
      context.lineTo(600,y);

  }

    context.strokeStyle='grey';
    context.stroke();
}

function filter() {
  document.getElementById("seedDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("seedDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}


function shareGarden() {
  alert("garden shared! Your code is usergarden1");
}

function saveGarden() {
  alert("Garden saved!");
}

window.addEventListener('DOMContentLoaded', () => {
  var canvas=document.getElementById("canvas");
  var ctx=canvas.getContext("2d");
  var $canvas = $("#canvas");
  var Offset = $canvas.offset();
  var offsetX = Offset.left;
  var offsetY = Offset.top;


  // select all .tool's
  var $seeds = $(".seed");


  // make all .tool's draggable
  $seeds.draggable({
      helper: 'clone',
  });


  // assign each .tool its index in $tools
  $seeds.each(function (index, element) {
      $(this).data("seedsIndex", index);
  });


  // make the canvas a dropzone
  $canvas.droppable({
      drop: dragDrop,
  });


  // handle a drop into the canvas
  function dragDrop(e, ui) {

      // get the drop point (be sure to adjust for border)
      var x = parseInt(ui.offset.left - offsetX) - 1;
      var y = parseInt(ui.offset.top - offsetY);

      // get the drop payload (here the payload is the $tools index)
      var theIndex = ui.draggable.data("seedsIndex");

      // drawImage at the drop point using the dropped image
      ctx.drawImage($seeds[theIndex], x, y, 64, 64);

  }
  });
