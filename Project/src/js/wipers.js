$(function(){
	var global =0
	window.debut =0;
	window.fin = 110;
	window.trigger =0;
	window.triggera =0;
	window.stop = 0;
	gm.info.watchVehicleData(wipers, ['wipers_on']);
	gm.info.getVehicleData(wipers, ['wipers_on']);
	//console.log('deeeeg'+deg)
})

function wipers(data){
	var wipers = data.wipers_on;
	///console.log('windowtrigger'+window.trigger)
	if(wipers !== undefined){
		if(wipers == 0){
			if(window.trigger !== 0){
				clearInterval(window.trigger);
				console.log('succes r')
				window.triggera = setInterval("move()",20)	
			}
			
		}else{
			if(window.trigger !== 0){
				clearInterval(window.triggera);
			}
			global = 1;

			window.trigger = setInterval("movef()",20)
			console.log("trigger " +trigger)

		}
	}
}



//////////////////////////// 0 False
function move(){
	window.debut =0;
	window.fin =110;
	window.stop = window.stop-1;
	var t = -window.stop
	$(".wipers").css("transform","rotate("+window.stop+"deg)");
	$(".wipers1").css("transform","rotate("+t+"deg)");
	if(window.stop ==0){
		
		clearInterval(window.triggera);
		console.log('succes ra')
	}
}
/////////////////////////// 1 vrai
function movef(){
	window.stop=0
	if(window.debut <= window.fin){
		window.debut = window.debut+1;
		window.stop =window.debut;
		var d = -window.debut
		$(".wipers").css("transform","rotate("+window.debut+"deg)");
		$(".wipers1").css("transform","rotate("+d+"deg)");
	}else{
		
		window.fin = window.fin-1;
		var f = -window.fin
		$(".wipers").css("transform","rotate("+window.fin+"deg)");
		$(".wipers1").css("transform","rotate("+f+"deg)");
		window.stop =window.fin;
		if(window.fin == 0){
			window.fin =110;
			window.debut =0;
		}
	}
}