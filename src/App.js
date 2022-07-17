import Tabs from "./componentes/Tabs";
import ToursContextProvider from "./contexts/ToursContext";
import Header from "./componentes/Header"
import NavBar from "./componentes/NavBar";
import Cards from "./componentes/Cards"
import ShoppingCards from "./componentes/ShoppingCards";
import CartContextProvider from "./contexts/CartContext";

function App() {

  return (
    <>
      <CartContextProvider>
        <ShoppingCards />
        <ToursContextProvider>
          <Tabs></Tabs>
        </ToursContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
