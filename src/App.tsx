import {Button} from "@simplybusiness/mobius";
import {useRef, useState} from "react";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import "./App.css";
import {Section} from "./Section/Section";
import sections from "./sections.json";

function App() {
  const sectionRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const nextPage = () => {
    setDirection("right");
    setCurrentPage((currentPage + 1) % sections.length);
  };

  const prevPage = () => {
    setDirection("left");
    setCurrentPage((currentPage - 1 + sections.length) % sections.length);
  };

  const pageProps = sections[currentPage];

  return (
    <>
      <header className="header">Header</header>
      <main className={direction}>
        <SwitchTransition>
          <CSSTransition
            key={pageProps.title}
            nodeRef={sectionRef}
            timeout={400}
          >
            <Section ref={sectionRef} {...pageProps} />
          </CSSTransition>
        </SwitchTransition>

        <div className="buttons">
          <Button onClick={prevPage} variant="secondary">
            Previous
          </Button>
          <Button onClick={nextPage} variant="primary">
            Next
          </Button>
        </div>
      </main>
      <footer className="footer">Footer</footer>
    </>
  );
}

export default App;
