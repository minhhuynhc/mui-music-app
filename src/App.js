import { BrowserRouter } from "react-router-dom";
import DashboardLayout from "./layout/dashboard";
import Router from "./routes";
import ThemeProvider from "./theme";



function App() {
  return (
    
      <ThemeProvider>
        <Router/>
      </ThemeProvider>
  );
}

export default App;
