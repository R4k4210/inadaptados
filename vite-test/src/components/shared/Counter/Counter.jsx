import { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    console.log("counter", counter);
    if (counter === 5) {
      console.log("Es 5!!!");
    }
  }, [counter]); // LISTA DE DEPEDENCIAS

  const add = () => {
    setCounter((prevCounter) => prevCounter + 1); //ASINCRÓNICO
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

export default Counter;
