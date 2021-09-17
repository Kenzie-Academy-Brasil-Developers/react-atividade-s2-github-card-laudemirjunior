import "./Input.css";

function Data({ handleData, textInput, setTextInput, msg, msg2 }) {
  function handleSearch() {
    fetch(`https://api.github.com/repos/${textInput}`)
      .then((response) => response.json())
      .then((response) => handleData(response));
  }

  return (
    <div className="container">
      <div className="input">
        <div className="msg">
          <input
            type="text"
            value={textInput}
            onChange={(event) => setTextInput(event.target.value)}
          />
          {msg && <span>Pesquisa Obrigatório</span>}
          {msg2 && <span>Diretório não encontrado</span>}
        </div>
        <button
          variant="contained"
          color="primary"
          onClick={() => handleSearch()}
        >
          Search
        </button>
      </div>
    </div>
  );
}
export default Data;
