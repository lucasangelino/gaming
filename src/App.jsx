import { useState } from "react";

import Hero from "./components/Hero";
import AnimatedBackground from "./components/AnimatedBackground";
import Form from "./components/Form";

function App() {
  return (
    <>
      <div className="app">
        <AnimatedBackground />
        <Hero />
      </div>
      <Form />
    </>
  );
}

export default App;
