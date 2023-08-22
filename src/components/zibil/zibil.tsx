import "./zibil.css";
import { useEffect, useState } from "react";

const Stock = () => {
  return (
    <div className="zibil stocks">
      <h1>Stock</h1>
    </div>
  );
};

const Favourite = () => {
  return (
    <div className="zibil favorite">
      <h1>Favor</h1>
    </div>
  );
};

const Cart = () => {
  const [fact, setFact] = useState();
  useEffect(() => {

        console.log(fact)
  }, [fact]);

  const handleClick = () =>{
    fetch("https://catfact.ninja/fact")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setFact(data.fact);
    })
  }
  return (
    <div className="zibil cart">
      <h1>{fact}</h1>
      <button onClick={handleClick}>get fact</button>
    </div>
  );
};
export { Stock, Favourite, Cart };
