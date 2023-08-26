import React from "react";
import Navbar from "./components/Navbar";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";
import Result from "./components/Result";
import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="md">
        <SliderSelect />
        <TenureSelect />
        <Result />
      </Container>
    </div>
  );
}

export default App;
