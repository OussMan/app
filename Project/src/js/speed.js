$(function(){


////////////// fuel 
gm.info.getVehicleData(showfuel, ['fuel_level']);
gm.info.watchVehicleData(showfuel, ['fuel_level']);

////////////// Speeeeed 

gm.info.getVehicleData(showspeed, ['average_speed']);
gm.info.watchVehicleData(showspeed, ['average_speed']);

////// tempurature 

gm.info.getVehicleData(showTemp, ['engine_oil_temp']);
gm.info.watchVehicleData(showTemp, ['engine_oil_temp']);

        $('#close').find('img').click(function(){
            window.location.href = "./app.html";
        })

});

/////////////////////// fuel iguine

function showfuel(data) {
 var fuel= data.fuel_level;
    console.log('shooooow'+fuel);
    /////// apppel la fonction clock1
     Clock1(fuel);
   return fuel;
 }

function Clock1(fuel){

    angle = (fuel * 90) /100 ;
    console.log(angle)
    var fuelText = $(".nfuel").text();
    fuelText ='<span class="aff"> &nbsp;'+fuel+' % </span>';
    $(".nfuel").html(fuelText)
    if (angle < 22.5){
        $('.clock').find(".clock__seconds").css({
            backgroundColor:'red'
        })
        $('.aff').css({
            color :'red'
        })

    }else{
         $('.clock').find(".clock__seconds").css({
            backgroundColor:'blue'  
        })
         $('.nfuel').find(".aff").css({
            color :'blue'
        })
    }
    $('.clock').find(".clock__seconds").css({
        transform : 'rotate('+angle+'deg)'  
    })
}

///////////////////// iguine Speeeeeeeed 
 function showspeed(data) {
 var speed= data.average_speed;
    console.log('Speeeeed'+speed);
    /////// apppel la fonction clock1
     ClockCenter(speed);
   return speed;
 }

 function ClockCenter(speed){
  if(speed<=511){
        angle = ((speed * 160) /511)+10 ;
        console.log(angle)

        var fuelText = $(".nspeed").text();
        fuelText ='<span class="aff">'+speed+' km/h </span>';
        $(".nspeed").html(fuelText)
        if (angle < 45){
            $('.clockCenter').find(".clock__seconds").css({
                backgroundColor:'blue'
            })
            $('.nspeed').find('.aff').css({
                color :'blue'
            })
        }else{
             $('.clockCenter').find(".clock__seconds").css({
                backgroundColor:'red'  
            })
             $('.nspeed').find(".aff").css({
                color :'red'
            })
        }
        
        $('.clockCenter').find(".clock__seconds").css({
            transform : 'rotate('+angle+'deg)'  
        })
    }
}

/////////////////////////// temperature 

 function showTemp(data) {
 var temp= data.engine_oil_temp;
    console.log('tempoussa  id'+temp);
    /////// apppel la fonction clock1
     ClockTemp(temp);
   //return temp;
 }

 function ClockTemp(temp){

        angle1 = -(((temp+40) * 90) /255)-180;
        console.log('angle templ'+angle1)

        var TempText = $(".ntemp").text();
        TempText ='<span class="aff">'+temp+' °C </span>';
        $(".ntemp").html(TempText)
        if (angle < 45){
            $('.clock2').find(".clock__seconds").css({
                backgroundColor:'blue'
            })
            $('.ntemp').find('.aff').css({
                color :'blue'
            })
        }else{
             $('.clock2').find(".clock__seconds").css({
                backgroundColor:'red'  
            })
             $('.ntemp').find(".aff").css({
                color :'red'
            })
        }
        
        $('.clock2').find(".clock__seconds").css({
            transform : 'rotate('+angle1+'deg)'  
        })
}

