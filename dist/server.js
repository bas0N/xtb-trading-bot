"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = __importDefault(require("ws"));
require("dotenv").config();
const socket = new ws_1.default("wss://ws.xtb.com/demo");
socket.addEventListener("open", () => {
    // Log in to the API
    socket.send(JSON.stringify({
        command: "login",
        arguments: {
            userId: process.env.USER_ID,
            password: process.env.PASSWORD,
        },
    }));
});
// receive a message from the server
socket.addEventListener("message", ({ data }) => {
    const packet = JSON.parse(data);
    //   switch (packet.type) {
    //     case "hello from server":
    //       // ...
    //       break;
    //   }
    console.log(packet);
});
/*
Command: getCurrentUserData
Description: Returns information about account currency, and account leverage.

{
    "command": "getCurrentUserData"
}

 */
/*
Command: getServerTime
Description: Returns current time on trading server.

{
    "command": "getServerTime"
}


 */
/*
Command: getSymbol
Description: Returns information about symbol available for the user.

{
    "command": "getSymbol",
    "arguments": {
        "symbol": "EURPLN"
    }
}
*/
/*
Command: tradeTransaction
Description: Starts trade transaction. tradeTransaction sends main transaction information to the server.

{
    "command": "tradeTransaction",
    "arguments": {
        "tradeTransInfo": TRADE_TRANS_INFO
    }
}
*/
