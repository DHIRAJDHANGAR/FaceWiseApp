import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import "./App.css";
import FaceWiseApp from "./FaceWise";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ height: "100vh" }}>
          <FaceWiseApp />
        </Box>
      </Container>
    </>
  );
}

export default App;
