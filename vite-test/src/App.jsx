import { useState } from "react";
import Button from "./components/Button";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [isConnected, setIsConnected] = useState(false);

  const add = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const connect = () => {
    setIsConnected((prevValue) => !prevValue);
  };

  return (
    <>
      <h1>Hello World</h1>
      <Button handleClick={add} label={"Conectar"} />
      {isConnected && <p>CONECTADO</p>} {counter}
    </>
  );
};

export default App;
