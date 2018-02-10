$(function(){

setInterval("moveBackground()",60);		
 
 var timeline = new TimelineLite();
 
 //objects 

 var bg = $("div.bg");

 
 
 //animation
 
  timeline.to(bg,0.8,{"opacity":"1"},"#txt");
 
 });


    


function moveBackground() {

var old_bg_position_x = $("div.bg").css("backgroundPositionX");

var new_position = parseInt(old_bg_position_x) - 1;

$("div.bg").css("backgroundPositionX",new_position+"px");

}
