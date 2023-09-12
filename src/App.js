import "./styles.css";
import { useState } from "react";
import useDebounce from "./hooks/useDebounce";
import { useEffect } from "react";

export default function App() {
  const [searchValue, setSearchValue] = useState(null);
  const delay_time = 300;

  const debouncedSearchValue = useDebounce(searchValue, delay_time);
  useEffect(() => {
    if (debouncedSearchValue) {
      console.log("OnChange API call for >> ", debouncedSearchValue);
    }
  }, [debouncedSearchValue]);
  return (
    <div className="App">
      {/* <button onClick={betterFunction(API_call_func, delay_time)}>CALL</button> */}
      <input onChange={(e) => setSearchValue(e.target.value)} />
    </div>
  );
}
