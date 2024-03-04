import AppRoutes from "./Routes/AppRoutes";
import Example from "./components/RadioGroup/RadioGroup";
import GreetingPage from "./pages/Greeting/GreetingPage";
import { Route, Routes } from "react-router-dom";
import FinishPage from "./pages/Finish/FinishPage";
import Results from "./pages/Results/Results";
import "./App.css";
import { useState } from "react";

function App() {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const hadleQuestionCallBack = (data: any) => {
    setCorrectAnswers(data);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GreetingPage />} />
        <Route
          path="/main"
          element={<Example callback={hadleQuestionCallBack} />}
        />
        <Route path="/finish" element={<FinishPage />} />
        <Route path="/results" element={<Results correctAnswers={correctAnswers}/>} />
      </Routes>
    </div>
  );
}

export default App;
