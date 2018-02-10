$(function(){ 
	window.totale = 0;
	console.log('sssssssssssssssssssssssssssssssssssssss')
	gm.info.watchVehicleData(showdriverdoor, ['driver_door_open']);
	gm.info.getVehicleData(showdriverdoor, ['driver_door_open']);

	gm.info.watchVehicleData(showpassengerdoor, ['passenger_door_open']);
	gm.info.getVehicleData(showpassengerdoor, ['passenger_door_open']);

	gm.info.watchVehicleData(showrearleftdoor, ['rearleft_door_open']);
	gm.info.getVehicleData(showrearleftdoor, ['rearleft_door_open']);

	gm.info.watchVehicleData(showrearrightdoor, ['rearright_door_open']);
	gm.info.getVehicleData(showrearrightdoor, ['rearright_door_open']);

	window.trigger = setInterval("functionup()",60)
})

/////////////////// doooor
function showrearrightdoor(data) {
 window.totale = window.totale + data.rearright_door_open;
 //console.log('dddd '+window.totale)
}

function showrearleftdoor(data) {
  window.totale = window.totale +  data.rearleft_door_open;
  //console.log('ddddt '+window.totale)
}


function showdriverdoor(data) {
  window.totale = window.totale +  data.driver_door_open;
  //console.log('dddda '+window.totale)
}
 function showpassengerdoor(data) {
  window.totale = window.totale +  data.passenger_door_open;
  //console.log('ddddz '+window.totale)
 }
 function functionup(){
		
		if(window.totale == 4){
			
			clearInterval(window.trigger);
		}
 }