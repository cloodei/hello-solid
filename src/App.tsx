import { createSignal } from 'solid-js';
import Button from './components/button';
import Header from './components/header';

export default function App() {
  const [buttonData, setButtonData] = createSignal("No, click me!");
  const [buttonData2, setButtonData2] = createSignal("Here, click me!");

  const handleBClick = () => {
    if(buttonData() === "Clicked!") {
      setButtonData("No, click me!");
      return;
    }
    setButtonData("Clicked!");
  }

  const handleBClick2 = () => {
    if(buttonData2() === "Clicked 2!") {
      setButtonData2("Here, click me!");
      return;
    }
    setButtonData2("Clicked 2!");
  }

  return (
    <>
      <Header />
      <main class="container mx-auto px-4 py-6">
        <h1 class="font-bold text-2xl text-center text-gray-800">
          Welcome to Solid TS!
        </h1>
        <p class="text-center text-gray-800 mt-3">
          SolidTS is a declarative JavaScript library for building user interfaces.
        </p>
        <div class="flex justify-center mt-6">
          <Button class="mr-2" onClick={handleBClick}>
            {buttonData()}
          </Button>
          <Button class="ml-2" onClick={handleBClick2}>
            {buttonData2()}
          </Button>
        </div>
      </main>
    </>
  );
}
