import AppRoutes from "./Routes/AppRoutes";
import Example from "./components/RadioGroup/RadioGroup";
import GreetingPage from "./pages/Greeting/GreetingPage";
import { Route, Routes } from "react-router-dom";
import FinishPage from "./pages/Finish/FinishPage";
import Results from "./pages/Results/Results";
import './App.css'



function App() {
 

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GreetingPage />} />
        <Route path="/main" element={<Example />} />
        <Route path="/finish" element={<FinishPage />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    
    </div>
  );
}

export default App;
