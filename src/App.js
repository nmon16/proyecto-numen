import Tabs from "./componentes/Tabs";
import ToursContextProvider from "./contexts/ToursContext";
import Header from "./componentes/Header"
import NavBar from "./componentes/NavBar";

function App() {

  return (
    <>
    <Header></Header>
    <NavBar></NavBar>
      <ToursContextProvider>
        <Tabs></Tabs>
      </ToursContextProvider>
    </>
  );
}

export default App;
