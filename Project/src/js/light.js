
$(function(){
////////////////////////////////////light
gm.info.watchVehicleData(showSbrakelights, ['brake_lights']);
gm.info.getVehicleData(showSbrakelights, ['brake_lights']);

//// signale fog_light_ind
gm.info.watchVehicleData(fog_light_ind, ['fog_light_ind']);
gm.info.getVehicleData(fog_light_ind, ['fog_light_ind']);




})
function fog_light_ind(data) {
   console.log(data.fog_light_ind);
  var sig = data.fog_light_ind;
  if (sig !== undefined) {
	
	if(sig == 0) {
		$('.lighttopleft').css({
			'background':'white'
		})
		$('.lighttopright').css({
			'background':'white'
		}) 
		$('.trapez3').css({
			'display':'none'
			})
		$('.trapez4').css({
			'display':'none'
			})
	}else{
		$('.lighttopleft').css({
			'background':'linear-gradient(0deg, #ff8f00,yellow )'
		})
		$('.lighttopright').css({
			'background':'linear-gradient(0deg,#ff8f00 , yellow)'
		}) 
		$('.trapez3').css({
		'display':'block'
		})
		$('.trapez4').css({
		'display':'block'
		})
	}
  }
}
 /////////////////////reeeeeegel

function showSbrakelights(data) {
   console.log(data.brake_lights);
  var signal = data.brake_lights;
  if (signal !== undefined) {
	
	if(signal == 0) {
		$('.lightbottomleft').css({
			'background':'white'
		})
		$('.lightbottomright').css({
			'background':'white'
		})
		$('.trapez1').css({
			'display':'none'
			})
		$('.trapez2').css({
			'display':'none'
			})
	}else{
		$('.lightbottomleft').css({
			'background':'linear-gradient(0deg, yellow, #ff8f00)'
		}) 
		$('.lightbottomright').css({
		'background':'linear-gradient(0deg, yellow, #ff8f00)'
		})
		$('.trapez1').css({
		'display':'block'
		})
		$('.trapez2').css({
		'display':'block'
		})	
	}
  }
}