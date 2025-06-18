import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8088 });

wss.on("connection", function (socket) {
	console.log("User Connected!");

	socket.on("message", (e) => {
		if(e.toString() === "ping") {
			socket.send("pong");
		} else {
			socket.send("Send ping, mofo!");
		}
	})
})