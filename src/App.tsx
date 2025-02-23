import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { RoutePage } from "./utils/RoutePage";
import { Theme } from "@radix-ui/themes";

function App() {
  return (
    <Theme>
      <Router>
        <RoutePage />
      </Router>
    </Theme>
  );
}

export default App;
