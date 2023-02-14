import WebSocket from "ws";
require("dotenv").config();
const socket = new WebSocket("wss://ws.xtb.com/demo");
socket.addEventListener("open", () => {
  // Log in to the API
  socket.send(
    JSON.stringify({
      command: "login",
      arguments: {
        userId: process.env.USER_ID,
        password: process.env.PASSWORD,
      },
    })
  );
});

// receive a message from the server
socket.addEventListener("message", ({ data }: { data: any }) => {
  const packet = JSON.parse(data);

  console.log(packet);
});

/*
{
	"command": "tradeTransaction",
	"arguments": {
		"tradeTransInfo": {
	"cmd": 0,
	"customComment": "Some text",
	"expiration": 1676419147000,
	"offset": 0,
	"order": 0,
	"price": 4.46,
	"sl": 0.0,
	"symbol": "EURUSD",
	"tp": 0.0,
	"type": 0,
	"volume": 0.1
}
	}
}
*/
