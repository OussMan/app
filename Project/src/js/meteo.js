var tempMode = 2;

gm.info.watchPosition(processPosition, true)
gm.info.getCurrentPosition(processPosition, true)


function processPosition(position){
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  console.log(lat+'qqqqqqqqqqqqqq '+lng);
   //document.getElementById('latitude').value = lat;
   //document.getElementById('longitude').value = lng;
  getWeather(lat , lng);
   
}


function getWeather(lat, lon) {
  var apiURI = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=06170c100199dbae1e223cc3dfad960b";

  $.ajax({
    url: apiURI,
    dataType: "json",
    type: "GET",
    async: "false",
    success: function(resp) {

      //console.log(apiURI);
      console.log(resp);
     console.log(resp.name + ", " + resp.sys.country);
      //////////// Name 
      if (resp.name) {
        $("#city-text").html(resp.name + ", " + resp.sys.country);
      }
      //////////////// vent 
      if (resp.wind) {
        var knots = resp.wind.speed * 1.8438445;
        $("#wind-text").html(knots.toFixed(1) + " Knots");
        if(resp.wind.deg){
          $("#winddeg").html(resp.wind.deg+" Deg");
        }
        
      }
      ////////////////// temerature
      if (resp.main.temp) {
        var cels = (resp.main.temp - 273.15);
        if (cels > 24){ 
          $("#temp-text").css("color", "red");
        } else if (cels < 18){
          $("#temp-text").css("color", "#d9d2c3");
        }
        $("#temp-text").html( cels.toFixed(0) + " C&deg");
        $("#temp-max").html("Max  "+((resp.main.temp_max)-273.15)+" °C");
        $("#temp-min").html("Min  "+((resp.main.temp_min)-273.15)+" °C");
      }
      ///////////////////// weather
      if (resp.weather) {
        var imgURL = "http://openweathermap.org/img/w/" + resp.weather[0].icon + ".png";
       // console.log(imgURL)
        $("#text-titre").html(resp.weather[0].main);
        $("#weatherImg").attr("src", imgURL);
        $("#weather-text").html(resp.weather[0].description);
      }
      if(resp.main.pressure){
        $("#Pre").attr("src", "./../images/bar.png");
        $("#pressure-text").html(resp.main.pressure +' bar')
      } 
      if(resp.main.humidity){
        $("#hmd").attr("src", "./../images/hemidity.png");
        $("#humidity-text").html(resp.main.humidity +' %')
      }

      
    },
    error: function(resp) {
       //alert("Error: " + e);
       clearInterval(updateinter);
    }
  });
}


var i = 0;
var updateinter = setInterval(function(){
  gm.info.watchPosition(processPosition, true)
  gm.info.getCurrentPosition(processPosition, true)
 
}, 100*60*30);
