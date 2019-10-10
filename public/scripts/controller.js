/

$(document).ready(function () {
	var text = "The fan is turned ";
	var date = new Date();
	var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
	client.on("connect", function () {console.log("Connected Successfully.")})
	$('button').on('click', function (e) {
		$('p').html(text + $(this).val())
		event.preventDefault();
		client.publish("balugo/fan/status", $('p').html() + time);
		console.log("Topic: balugo/fan/status", "Payload: " + $('p').html() +" "+ time);
	})
})