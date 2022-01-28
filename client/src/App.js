import "./App.css";
import TiketList from "./components/TiketList/TiketList";
import response from "./response.json";
import { io } from "socket.io-client";
import { connect } from "react-redux";
// const socket = io("ws://localhost:4000");

// socket.on("connect", () => {
//   console.log(socket.connected);
// });
// socket.emit("start");
// socket.on("ticker", (data) => {
//   console.log(data);
// });
function App() {
  return <TiketList tiket={response} />;
}

export default App;
