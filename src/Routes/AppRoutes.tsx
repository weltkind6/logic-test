import { Route, Routes } from "react-router-dom";
import Greeting from "../pages/Greeting/GreetingPage";
import Example from "../components/RadioGroup/RadioGroup";

const AppRoutes = () => {
    return (
      <Routes>
        <Route path="greeting" element={<Greeting />} />
        <Route path="main" element={<Example />} />
      </Routes>
    );
  };
  
  export default AppRoutes;

