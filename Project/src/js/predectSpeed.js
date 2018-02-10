// Your code goes here

//1. Récupération des données en temps réel
function quitepred(){
	 window.location.href = "./app.html";
}

 console.log("Start");

var gps_speed = [],
	gps_lat = [],
	gps_long = [],
	lat_accel = [],
	long_accel = [];
var signals = ['gps_speed', 'gps_lat', 'gps_long', 'lat_accel', 'long_accel'];

var handle1 = gm.info.watchVehicleData(function(data){
	if(data.gps_speed != undefined){
		gps_speed.push(data.gps_speed);
		console.log(gps_speed);
	}
}, signals);

var handle2 = gm.info.watchVehicleData(function(data){
	if(data.gps_lat != undefined){
	gps_lat.push(data.gps_lat);
	console.log(gps_lat);	
	}
}, signals);

var handle3 = gm.info.watchVehicleData(function(data){
	if(data.gps_long != undefined){
	gps_long.push(data.gps_long);
	console.log(gps_long);
	}
}, signals);


var handle4 = gm.info.watchVehicleData(function(data){
	if(data.lat_accel != undefined){
	lat_accel.push(data.lat_accel);
	console.log(lat_accel);
	}
}, signals);
var i =0

var handle5 = gm.info.watchVehicleData(function(data){
	if(data.long_accel != undefined){
	long_accel.push(data.long_accel);
	console.log(long_accel);
	}
}, signals);

setTimeout(function(){
		console.log('iteration'+i)
	$.ajax({
		url: 'http://localhost:5000/api/pridect',
		type: "POST",				
		data: JSON.stringify({a: gps_speed, b: gps_lat, c: gps_long, d: lat_accel, e:long_accel}),
		contentType: "application/json; charset=utf-8"
		
	}).done(function( speed ){
		console.log(speed);

		//var predict = eval(msg);
		//document.getElementById("affichage").innerHTML = "Résultat";
		//document.getElementById("affichage").style.color = "green";



		
		
		//document.getElementById("mondiv").innerHTML = msg;
		speed = speed.replace("{","");
		speed = speed.replace("}","");
		
		var tableau=speed.split(",");
		for (i=0; i<tableau.length; i++){
			var sp = tableau[i].split(":")
			var spd = sp[1].replace("[","");
			var sped = spd.replace("]","");
			var span = document.createElement('span');
			//div.appendChild(document.createTextNode('Contenu généré par le DOM'));
			span.className = "affspan";
			span.innerHTML = "Pédiction "+sped + " km/h";
			//document.getElementById('test').innerHTML = msg;
			document.getElementById("affichage").appendChild(span);
			document.getElementById("affichage").style.display='block'
		}

	});
	i = i+1;
}, 100000);


  
// 1. recuperer les donnee apartir d'API gm (javascript|client)
// 2. cree une service web (REST => http) python et le lier avec le traitement (pythone|server)
// 3. envoyer une requete avec ajax (JavaScript|client) => recuprer resulta 



