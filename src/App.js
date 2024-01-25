import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";
import Result from "./components/Result";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";

function App() {
  const [a, setA] = useState(15);

  console.log(a);

  return (
    <div className="App">
      <Navbar />
      <button onClick={() => setA(30)}>Click Me</button>
      <Container maxWidth="lg" sx={{ marginTop: 5 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <SliderSelect />
            <TenureSelect />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
