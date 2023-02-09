import { FC } from "react";
import Experience from "./components/Experience";
import Screen from "./components/screen";
const App: FC = (props) => {

  return (
    <>
      <Experience>
        <div
        className="w-screen h-screen overflow-y-auto"
        >
          <h1>Este texto está en primer plano</h1>
          <Screen />
          <Screen />
          <Screen />
        </div>
      </Experience>
    </>
  );
};

export default App;
