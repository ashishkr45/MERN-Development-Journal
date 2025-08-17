import { WebSocketServer, WebSocket, RawData  } from "ws"

const wss = new WebSocketServer({ port: 2020 })

let userCount = 0;

interface User {
	socket: WebSocket,
	room: string, 
}

type MessageData =
	| {type: "join"; payload: { roomId: string } }
	| {type: "message"; payload: { text: string } };

let allSockets: User[] = [];

wss.on("connection", (socket) => {
	userCount++; // inc the userCound
	const userId = userCount; // storing the curr userCount for userId

	console.log(`New User Connected: #${userCount}`)

	let userRoom: string | null = null;
	
	socket.on("message", (message: RawData) => {
		let parsedMessage: MessageData;

		try {
			parsedMessage = JSON.parse(message.toString()) as MessageData;

			if(parsedMessage.type === "join") {
				userRoom = parsedMessage.payload.roomId;

				allSockets.push({
					socket,
					room: userRoom,
				})
			}

			if(parsedMessage.type === "message") {
				const text = parsedMessage.payload.text;

				if(!userRoom) {
					socket.send("You must join a Room first");
					return;
				}

				allSockets.forEach((user) => {
					if(user.room === userRoom && user.socket != socket) {
						user.socket.send(`#${userId}: ${text.toString()}`);
					}
				});
			}
		} catch(error) {
			socket.send("Invalid message formate!");
		}
	});

	socket.on("close", () => {
		allSockets = allSockets.filter(x => x.socket !== socket); // finding the socket which is disconnected
		console.log(`User #${userId} disconnected`);
	});
});