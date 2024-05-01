import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [inp, setInp] = useState("");

  useEffect(() => {
    async function getDatas() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      return setData(data);
    }
    getDatas();
  }, []);

  function sortByInc(category) {
    setData([...data].sort((a,b) => (a[category] > b[category]) ? 1 : ((b[category] > a[category]) ? -1 : 0)))
  }
  function sortByDec(category) {
    setData([...data].sort((a,b) => (a[category] < b[category]) ? 1 : ((b[category] < a[category]) ? -1 : 0)))
  }
  return (
    <>
      <div className="search">
        <input
          onChange={(e) => setInp(e.target.value)}
          value={inp}
          type="text"
          placeholder="Search..."
        />
        <ul>
          <li className="sort">
            Sort
            <ul className="dropdown">
              <li>
                <button onClick={()=>sortByInc("title")}>A-Z</button>
              </li>
              <li>
                <button onClick={()=>sortByDec("title")}>Z-A</button>
              </li>
              <li>
                <button onClick={()=>sortByDec("price")}>Sort by expensive</button>
              </li>
              <li>
                <button onClick={()=>sortByInc("price")}>Sort by cheap</button>
              </li>
              <li>
                <button onClick={()=>sortByInc("description")}>Sort by description A-Z</button>
              </li>
              <li>
                <button onClick={()=>sortByDec("description")}>Sort by description Z-A</button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="datas">
        {data
          .filter((x) => x.title.toLowerCase().includes(inp.toLowerCase()))
          .map((x) => (
            <div key={x.id} className="data_items">
              <img src={x.image} alt="" />
              <h2>{x.title}</h2>
              <p>{x.description}</p>
              <p>{x.price}$</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
