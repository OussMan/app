///// statut
function showhours(data) {
 var h= data.hours;
	console.log(h);
 if (h !== undefined) {
   var speedText = document.getElementById('Message');
  	if (h>6 && h<=12){
   		speedText.innerHTML = "<h1>Good Morning</h1>";
 	 }else if(h>12 && h<=18){
   		speedText.innerHTML = "<h1>Good Afternoon</h1>";
 	 }else{
 	 		speedText.innerHTML = "<h1>Good Evening</h1>";
 	 }
  }
 }

gm.info.watchVehicleData(showhours, ['hours']);
gm.info.getVehicleData(showhours, ['hours']);















////////// fuel_level
function showfuel(data) {
 var fuel= data.fuel_level;
	console.log(fuel);
 if (fuel !== undefined) {
   var speedText = document.getElementById('fuel');
  	if (fuel > 10){
      document.getElementById('notice').style.display = "none";
   		speedText.innerHTML ='<span style="">'+fuel+' % </span>';

 	 }else{
    speedText.innerHTML ='<span style="color:red">'+fuel+' % </span>';
    document.getElementById('notice').style.display = "block";
   }
  }
 }

gm.info.watchVehicleData(showfuel, ['fuel_level']);
gm.info.getVehicleData(showfuel, ['fuel_level']);


////////// Temperature
function showtemp(data) {
 var tmp= data.engine_oil_temp;
  console.log(tmp);
 if (tmp !== undefined) {
   var speedText = document.getElementById('tmp');
    if (tmp < 50){
      document.getElementById('noticeT').style.display = "none";
      speedText.innerHTML ='<span style="">'+tmp+' °C </span>';

   }else{
    speedText.innerHTML ='<span style="color:red">'+tmp+' % </span>';
    document.getElementById('noticeT').style.display = "block";
   }
  }
 }

gm.info.watchVehicleData(showtemp, ['engine_oil_temp']);
gm.info.getVehicleData(showtemp, ['engine_oil_temp']);
















function Functionouss() {
	 window.location.href = "../Views/app.html";
}
