import { Alerts } from "./components/Alert";
import { BadageComponent } from "./components/badage";
import { ButtonComponent } from "./components/buttonComponent";
import { CardsComponent } from "./components/cardsComponent";
import { ModalComponent } from "./components/modalComponent";
import "flowbite";

import "./App.css";

function App() {
  return (
    <>
      <h1>Buttons</h1>
      <ButtonComponent />
      <h1>Alert</h1>
      <Alerts />
      <h1>Badge</h1>
      <BadageComponent />
      <h1>Cards</h1>
      <CardsComponent
        href="#"
        imgSrc="/images/MinnesStund.png"
        imgAlt="bild på Andres minnesstund och på honom när han badar."
      />
      <ModalComponent />
    </>
  );
}

export default App;
