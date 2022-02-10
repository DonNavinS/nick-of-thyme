import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-w-full min-h-screen">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
