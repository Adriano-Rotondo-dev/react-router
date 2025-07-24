import { useState } from "react";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <>
      <Header />
      <HomePage />
      <footer>Footer</footer>
    </>
  );
}

export default App;
