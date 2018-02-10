$(function(){
	//////////////////// window
gm.info.watchVehicleData(showwindowdriver, ['window_driver']);
gm.info.getVehicleData(showwindowdriver, ['window_driver']);

gm.info.watchVehicleData(showwindowleftrear, ['window_leftrear']);
gm.info.getVehicleData(showwindowleftrear, ['window_leftrear']);

gm.info.watchVehicleData(showwindowpassenger, ['window_passenger']);
gm.info.getVehicleData(showwindowpassenger, ['window_passenger']);

gm.info.watchVehicleData(showwindowrightrear, ['window_rightrear']);
gm.info.getVehicleData(showwindowrightrear, ['window_rightrear']);

////////////////// dooooooooooooooooooor
gm.info.watchVehicleData(showdriverdoor, ['driver_door_open']);
gm.info.getVehicleData(showdriverdoor, ['driver_door_open']);

gm.info.watchVehicleData(showpassengerdoor, ['passenger_door_open']);
gm.info.getVehicleData(showpassengerdoor, ['passenger_door_open']);

gm.info.watchVehicleData(showrearleftdoor, ['rearleft_door_open']);
gm.info.getVehicleData(showrearleftdoor, ['rearleft_door_open']);

gm.info.watchVehicleData(showrearrightdoor, ['rearright_door_open']);
gm.info.getVehicleData(showrearrightdoor, ['rearright_door_open']);


/////////////////////////// pressure

gm.info.watchVehicleData(showpr1, ['tire_left_front_pressure']);
gm.info.getVehicleData(showpr1, ['tire_left_front_pressure']);

gm.info.watchVehicleData(showpr2, ['tire_left_rear_pressure']);
gm.info.getVehicleData(showpr2, ['tire_left_rear_pressure']);

gm.info.watchVehicleData(showpr3, ['tire_right_front_pressure']);
gm.info.getVehicleData(showpr3, ['tire_right_front_pressure']);

gm.info.watchVehicleData(showpr4, ['tire_right_rear_pressure']);
gm.info.getVehicleData(showpr4, ['tire_right_rear_pressure']);

})





/////////////// pressure

function showpr1(data) {
 var pn= data.tire_left_front_pressure;
 console.log('pneu1'+pn)
 if( pn !== undefined){
  	var pnText = document.getElementById('p1');
  	if (pn <20){
   		pnText.innerHTML = '<span style="color:red;"> '+pn+' </span>';
 	 }else {
   		pnText.innerHTML = '<span style="color:yellow;"> '+pn+' </span>';
 	 }
  }
}
function showpr2(data) {
 var pnr= data.tire_left_rear_pressure;
 console.log('pneu2'+pnr)
 if( pnr !== undefined){
  	var pnrText = document.getElementById('p2');
  	if (pnr <20){
   		pnrText.innerHTML = '<span style="color:red;"> '+pnr+' </span>';
 	 }else {
   		pnrText.innerHTML = '<span style="color:yellow;"> '+pnr+' </span>';
 	 }
  }
}
function showpr3(data) {
 var pnrf= data.tire_right_front_pressure;
 console.log('pneu3'+pnrf)
 if( pnrf !== undefined){
  	var pnrfText = document.getElementById('p3');
  	if (pnrf <20){
   		pnrfText.innerHTML = '<span style="color:red;"> '+pnrf+' </span>';
 	 }else {
   		pnrfText.innerHTML = '<span style="color:yellow;"> '+pnrf+' </span>';
 	 }
  }
}
function showpr4(data) {
 var pnrr= data.tire_right_rear_pressure;
 console.log('pneu2'+pnrr)
 if( pnrr !== undefined){
  	var pnrrText = document.getElementById('p4');
  	if (pnrr <20){
   		pnrrText.innerHTML = '<span style="color:red;"> '+pnrr+' </span>';
 	 }else {
   		pnrrText.innerHTML = '<span style="color:yellow;"> '+pnrr+'  </span>';
 	 }
  }
}


/////////////////// doooor
function showrearrightdoor(data) {
 var doorrgt= data.rearright_door_open;
 console.log('p3'+doorrgt)
 if( doorrgt !== undefined){
  		if (doorrgt == 0){
   			Mymovep4(0)
 	 	}else{
 	 		Mymovep4(40)
 	 }
  }
}

function showrearleftdoor(data) {
 var doorlf= data.rearleft_door_open;
 console.log('p3'+doorlf)
 if( doorlf !== undefined){
  		if (doorlf == 0){
   			Mymovep3(0)
 	 	}else{
 	 		Mymovep3(40)
 	 }
  }
}


function showdriverdoor(data) {
 var doord= data.driver_door_open;
 console.log('p1'+doord)
 if( doord !== undefined){
  		if (doord == 0){
   			Mymovep1(0)
 	 	}else{
 	 		Mymovep1(40)
 	 }
  }
}
 function showpassengerdoor(data) {
 var doorp= data.passenger_door_open;
	console.log('p2'+doorp);
 if( doorp !== undefined){
  		if (doorp == 0){
   			Mymovep2(0)
 	 	}else{
 	 		Mymovep2(40)
 	 }
 	}
 }


 function Mymovep1(a){
   		$('.porte1').css({
 	 		'transform': 'rotate('+a+'deg)'
 		})
 }
 function Mymovep2(a){
   		$('.porte2').css({
 	 		'transform': 'rotate('+-a+'deg)'
 		})
 }
 function Mymovep3(a){
   		$('.porte3').css({
 	 		'transform': 'rotate('+a+'deg)'
 		})
 }
 function Mymovep4(a){
   		$('.porte4').css({
 	 		'transform': 'rotate('+-a+'deg)'
 		})
 }


////////////////////////////////////////  window
function showwindowrightrear(data) {
 var wdr= data.window_rightrear;
	console.log(wdr);
 if (wdr !== undefined) {
  
  	if (wdr== 0){
   		
   		$('.porte4').css({
 	 		'background-color' : 'black'
 	 	})
 	 }else{
 	 	$('.porte4').css({
 	 		'background-color' : 'white'
 	 	})
   		
 	 }
  }
 }

function showwindowpassenger(data) {
 var wdp= data.window_passenger;
	console.log(wdp);
 if (wdp !== undefined) {
  
  	if (wdp== 0){
   		
   		$('.porte2').css({
 	 		'background-color' : 'black'
 	 	})
 	 }else{
 	 	$('.porte2').css({
 	 		'background-color' : 'white'
 	 	})
   		
 	 }
  }
 }

function showwindowdriver(data) {
 var wd= data.window_driver;
	console.log(wd);
 if (wd !== undefined) {
  
  	if (wd == 0){
   		
   		$('.porte1').css({
 	 		'background-color' : 'black'
 	 	})
 	 }else{
 	 	$('.porte1').css({
 	 		'background-color' : 'white'
 	 	})
   		
 	 }
  }
 }

 function showwindowleftrear(data) {
 var wdl= data.window_leftrear;
	console.log(wdl);
 if (wdl !== undefined) {
  
  	if (wdl == 0){
   		
   		$('.porte3').css({
 	 		'background-color' : 'black'
 	 	})
 	 }else{
 	 	$('.porte3').css({
 	 		'background-color' : 'white'
 	 	})
   		
 	 }
  }
 }

