import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Registration from "./Components/Registration";




function App() {
  return(
    
    <div className="App">
      <BrowserRouter>
      <Routes>
        
      <Route path="Login" element={<Login />}></Route>
      <Route path="Register" element={<Registration />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
    );
}
export default App;
