import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Input.css";

function Data({ handleData, textInput, setTextInput }) {
  function handleSearch() {
    fetch(`https://api.github.com/repos/${textInput}`)
      .then((response) => response.json())
      .then((response) => handleData(response));
  }

  const formSchema = yup.object().shape({
    search: yup.string().required("Pesquisa Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    handleSearch();
    setTextInput("");
    console.log(data);
  };

  return (
    <div className="container">
      {errors.search?.message}
      <div className="input">
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <input
            placeholder="Search"
            {...register("search")}
            type="text"
            value={textInput}
            onChange={(event) => setTextInput(event.target.value)}
          />
          <button>Search</button>
        </form>
      </div>
    </div>
  );
}
export default Data;
