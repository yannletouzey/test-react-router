import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import MainHome from "./component/MainHome";
import MainUser from "./component/MainUser";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/:idParam" element={<MainUser />} />
      </Routes>
    </>
  )
}

export default App
