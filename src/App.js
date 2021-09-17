import { useState } from "react";
import Card from "./components/Card/Card.jsx";
import Imput from "./components/Input/Input.jsx";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [textInput, setTextInput] = useState("");
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const notify = () =>
    toast.error("Diretório não encontrado.", {
      position: "bottom-center",
    });

  function handleData(object) {
    if (object.message !== undefined) {
      notify();
    } else {
      setData([...data, object]);
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
      />
      {show && <Card data={data} />}
      <Toaster />
    </div>
  );
}

export default App;
