import { useState } from "react";
import Card from "./components/Card/Card.jsx";
import Imput from "./components/Input/Input.jsx";
import "./App.css";

function App() {
  const [textInput, setTextInput] = useState("");
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState(false);
  const [msg2, setMsg2] = useState(false);

  function handleData(object) {
    if (textInput === "") {
      setMsg(true);
      setMsg2(false);
    } else if (object.message !== undefined) {
      setMsg(false);
      setMsg2(true);
    } else {
      setData([...data, object]);
      setMsg(false);
      setMsg(false);
      setShow(true);
    }
  }

  return (
    <div className="App">
      <h1>Github Card</h1>
      <Imput
        handleData={handleData}
        textInput={textInput}
        setTextInput={setTextInput}
        msg={msg}
        msg2={msg2}
      />
      {show && <Card data={data} />}
    </div>
  );
}

export default App;
