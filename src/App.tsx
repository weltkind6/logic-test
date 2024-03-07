import Example from "./components/RadioGroup/RadioGroup";
import GreetingPage from "./pages/Greeting/GreetingPage";
import { Route, Routes } from "react-router-dom";
import FinishPage from "./pages/Finish/FinishPage";
import Results from "./pages/Results/Results";
import { useState } from "react";
import Timer from "./components/Timer/Timer";
import "./App.css";

function App() {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isResetScore, setIsResetScore] = useState(Boolean);

  const hadleQuestionCallBack = (data: any) => {
    setCorrectAnswers(data);
  };

  const handleResetCounter = (data: boolean) => {
    setIsResetScore(data);
  }

  return (
    <div className="App">
      <Timer />
      <Routes>
        <Route path="/" element={<GreetingPage />} />
        <Route
          path="/main"
          element={<Example callback={hadleQuestionCallBack} isResetScore={isResetScore}/>}
        />
        <Route path="/finish" element={<FinishPage />} />
        <Route path="/results" element={<Results correctAnswers={correctAnswers} resetAnswers={handleResetCounter}/>} />
      </Routes>
    </div>
  );
}

export default App;
