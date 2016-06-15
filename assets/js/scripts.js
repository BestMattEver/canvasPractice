console.log("tutorial hooked up!")

var title = $('#boo');
console.log(title);
title.css('background', 'yellow');
title.css('margin-top', '100px');

//grab the canvas using vanilla JS
var canvas1 = document.getElementById('moo');
console.log(canvas1);
//OR USING JQUERY SELECTORS, BY GETTING THE FIRST DOM OBJECT IN THE ARRAY OF RETURNED ELEMENTS!
var canvas2 = $('#moo')[0];
//since the first element is a native dom element, it doesnt understand the .css method
//so here im just wrapping it in a jquery selector temporarily to draw a border.
$(canvas2).css("border","black 5px solid");

//this assigns a rendering context to the canvas
//we specify '2d' to ensure that its a 2d context.
//we can use other contexts too, like 3d and probably others.
var context = canvas2.getContext('2d');

//we use this context to actually draw stuff to the canvas in the html document. we dont draw directly
//to the canvas object, instead to the canvas's context.
//its often abreviated ctx, but i've called it 'context' here for clarity because this is a tutorial.


var squares = [];


//these lines draw a half transparent square on the canvas.
//context.fillStyle = "rgba(0,0,0,.5)";
//context.fillRect(10,10,50,50);

//this batch of code finds the top left corner of the canvas element.
var canvasX = $(canvas2).offset().left;
console.log("canvas x = " + canvasX);
var canvasY = $(canvas2).offset().top;
console.log("canvas y = " + canvasY);

var mousex;
var mousey;

//this first event listener figures out when the mouse is OVER the canvas...
$(canvas2).mouseover(function(f){
  //this SECOND event listener fires off when the mouse is moved ON the canvas.
  $(canvas2).mousemove(function(e){
    //these two lines subtract the location of the canvas on screen,
    //from the location of the mouse on the screen
    //which finds the location of the MOUSE on the CANVAS
    mousex = (e.pageX - canvasX)-5;//the -5 is because the canvas has a 5px border.
    mousey = (e.pageY - canvasY)-5;
    //and we show it on screen.
    context.fillStyle = "rgba(0,0,0,.5)";
    context.fillRect(mousex,mousey,3,3);

    //$("body").append("<br>mX = " + mousex + "/ mY = " + mousey);
  })
  //logs when the mouse hits the canvas.
  console.log("on the canvas");
});
