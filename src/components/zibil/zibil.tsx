import "./zibil.css";
import { useEffect, useState } from "react";
import { changeFact } from "../../redux/catFactSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import axios from "axios";

const Stock = () => {
  const [name, setName] = useState("default");
  const [value, setValue] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    setName(value);
    e.preventDefault();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    console.log(name);
  }, [name]);
  return (
    <div className="zibil name">
      <h1>Name</h1>
      <h1>{name}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

const Favourite = () => {
  return (
    <div className="zibil favorite">
      <h1>Favorite</h1>
    </div>
  );
};

const Cart = () => {
  const fact = useSelector((state: RootState) => state.catFact.value);
  const dispatch = useDispatch();

  const handleClick = async () => {
    const response = await axios.get("https://catfact.ninja/fact");
    const fact = await response.data.fact;
    dispatch(changeFact(fact));
  };
  return (
    <div className="zibil cart">
      <h1>{fact}</h1>
      <button onClick={handleClick}>get fact</button>
    </div>
  );
};
export { Stock, Favourite, Cart };
