import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { Box } from "@mui/material";

function App() {
  return (
    <div>
      <Header />
      <Box style={{marginTop : 55}}>
        <Home />
      </Box>
    </div>
  );
}

export default App;
