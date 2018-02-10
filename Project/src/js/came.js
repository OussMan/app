function closecam() {
	 window.location.href = "./app.html";
}
function Came(data) {
 var h= data.front_camera_on;
	console.log(data);
 }

gm.info.watchVehicleData(Came, ['front_camera_on']);
gm.info.getVehicleData(Came, ['front_camera_on']);