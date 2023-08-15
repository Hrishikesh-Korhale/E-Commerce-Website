import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { Box } from "@mui/material";
import DataProvider from "./contex/dataProvider";

function App() {
  return (
    <DataProvider>
      <Header />
      <Box style={{ marginTop: 55 }}>
        <Home />
      </Box>
    </DataProvider>
  );
}

export default App;
