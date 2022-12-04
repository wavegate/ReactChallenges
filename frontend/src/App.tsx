import Challenges from "./pages/Challenges";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Challenges />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
