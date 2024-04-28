import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [cpuChoice, setCpuChoice] = useState("");
  const [userChoice, setUserChoice] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    userChoice !== "" && cpuChoice !== "" ? getResult() : null;
  }, [userChoice, cpuChoice]);

  function getChoices() {
    const randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
      setCpuChoice("Rock");
    } else if (randomChoice === 1) {
      setCpuChoice("Paper");
    } else {
      setCpuChoice("Scissors");
    }
  }

  function getResult() {
    if (userChoice === cpuChoice) {
      setResult("Equal");
    } else if (
      (userChoice === "Rock" && cpuChoice === "Scissors") ||
      (userChoice === "Paper" && cpuChoice === "Rock") ||
      (userChoice === "Scissors" && cpuChoice === "Paper")
    ) {
      setResult("You win");
    } else {
      setResult("CPU wins");
    }
  }
  function handleUserChoice(choice) {
    setUserChoice(choice);
    getChoices();
  }
  return (
    <>
      <p>
        CPU choice: <span>{cpuChoice}</span>
      </p>
      <p>
        User choice: <span>{userChoice}</span>
      </p>
      <p>Result: {result}</p>
      <button onClick={() => handleUserChoice("Rock")}>Rock</button>
      <button onClick={() => handleUserChoice("Paper")}>Paper</button>
      <button onClick={() => handleUserChoice("Scissors")}>Scissors</button>
    </>
  );
}

export default App;
