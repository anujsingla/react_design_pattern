import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import { AppTabs } from "./components/AppTabs";
// import { Count } from "./components/Count";
// import { Theme } from "./components/Theme";
// import { UserDetails } from "./components/UserDetails";
// import { CountNThemeProvider } from "./context/countNThemeContext";
// import { UserProvider } from "./context/userContext";
// import { AppAccordion } from "./components/AppAccordion";
import { ParentComponent } from "./components/RenderProps/ParentComponent";
import { MouseTracker } from "./components/RenderProps/MouseTracker";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <CountNThemeProvider>
          <UserProvider>
            {/* <Count />
            <Theme />
            <UserDetails />
            <AppTabs />
            <br />
            <br />
            <AppAccordion />
          </UserProvider>
        </CountNThemeProvider> */}
        <ParentComponent />
        <MouseTracker />
      </header>
    </div>
  );
}

export default App;
