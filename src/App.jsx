import { jsx, ThemeProvider } from "@emotion/react";
import { useEffect, useState } from "react";

import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import JumpSection from "./components/JumpSection";
import { Modal, Container } from "./styled-components";

function App() {
  const [primary, setPrimary] = useState("");
  const [modal, setModal] = useState(false);

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
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        {modal && (
          <Modal onClick={closeModal}>
            <div className="modal-left">
              <button>x</button>
            </div>
            <div className="modal-right">
              <a id="lorem" href="#lorem">
                lorem
              </a>
              <a id="ipsum" href="#ipsum">
                ipsum
              </a>
              <a id="dolore" href="#dolore">
                dolore
              </a>
            </div>
          </Modal>
        )}
        <Header onChange={changeTheme} onMenuClick={openModal} />
        <About onChange={changeTheme} />
        <JumpSection />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
