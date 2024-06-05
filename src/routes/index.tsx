import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "@/App";


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/test" element={<h2>try</h2>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
