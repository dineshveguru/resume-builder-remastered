import "./App.css";
import { useReactToPrint } from "react-to-print";
import Resume from "./components/Resume";
import React, { useRef } from "react";

function App() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="App">
      <Resume innerRef={componentRef} />
      <button onClick={handlePrint}>print me</button>
    </div>
  );
}

export default App;
