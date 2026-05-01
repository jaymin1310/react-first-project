import { createRef, useState } from "react";
import { createElement } from "react-dom/client";
import Main from "./components/MainContent";
import Footer from "./components/Footer";
import Header from "./components/Header";
export default function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
