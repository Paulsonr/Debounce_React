import "./styles.css";

export default function App() {
  const delay_time = 300;
  const API_call_func = () => {
    console.log("API is calling");
  };
  // const debouncingAPIFunction = (fn, delay) => {
  //   let timer;
  //   return () => {
  //     let context = arguments;
  //     clearInterval(timer);
  //     timer = setTimeout(() => {
  //       fn(context, arguments);
  //     }, delay);
  //   };
  // }; initial method for reference :>

  // const betterFunction = debouncingAPIFunction(API_call_func, delay_time);
  const betterFunction = (fn, delay) => {
    let timer;
    return () => {
      let context = arguments;
      clearInterval(timer);
      timer = setTimeout(() => {
        fn(context, arguments);
      }, delay);
    };
  };

  return (
    <div className="App">
      {/* <button onClick={betterFunction(API_call_func, delay_time)}>CALL</button> */}
      <input onChange={betterFunction(API_call_func, delay_time)} />
    </div>
  );
}
