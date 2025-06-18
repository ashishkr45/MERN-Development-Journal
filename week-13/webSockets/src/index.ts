// this'll be the server side of the webSocket
import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8088 });

// event-handler: when a new connection comes to the web-socket serve call this fn	
wss.on("connection", function(socket) {
	console.log("User connected!");

	setInterval(() => {
		socket.send(`Hello ${Math.random()} lord!`);
	}, 1000);

	socket.on("message", (e) => {
		console.log(e.toString());
	})
});