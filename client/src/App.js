import "./App.css";
import TiketList from "./components/TiketList/TiketList";
import response from "./response.json";

function App() {
  return (
    <>
      <TiketList tiket={response} />
    </>
  );
}

export default App;
