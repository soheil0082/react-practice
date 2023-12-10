import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Layouts/header";
import Body from "./Layouts/body";
import Footer from "./Layouts/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Components/contact";

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
