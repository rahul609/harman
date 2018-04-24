var tabl = new TimelineLite({paused:true}),
    b1 = document.getElementById("b1"),
    b2 = document.getElementById("b2");
    

tabl.to("#one", 2, {left:550})
  .from("#two", 2, {left:1000}, 0);


b1.onclick = function()
{
  tabl.play();
}

b2.onclick = function()
{
  tabl.reverse();
}

