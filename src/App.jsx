import { jsx, ThemeProvider } from "@emotion/react";
import { useEffect, useState } from "react";

import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import JumpSection from "./components/JumpSection";

function App() {
  const [primary, setPrimary] = useState("");

  const theme = {
    primary: primary,
    grayHeaderBackground: "#5f5f5f",
    genericGray: "#b8b8b8",
    genericGreen: "#228b22",
  };

  useEffect(() => {
    setPrimary("#6495ed");
  }, []);

  const changeTheme = (theme) => setPrimary(theme);

  return (
    <ThemeProvider theme={theme}>
      <main>
        <Header onChange={changeTheme} />
        <About onChange={changeTheme} />
        <JumpSection />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
