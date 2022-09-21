import Tabs from "./componentes/Tabs";
import ToursContextProvider from "./contexts/ToursContext";
import Header from "./componentes/Header";
import CartContextProvider from "./contexts/CartContext";
import Body from "./componentes/Body";
import Carrousel from "./componentes/Carrousel";
import Footer from "./componentes/Footer";
import Booking from "./componentes/Booking";

function App() {

  return (
    <>
      <CartContextProvider>
        <Header />
        <Carrousel></Carrousel>
        <Booking/>
        <Body></Body>
        <ToursContextProvider>
          <Tabs></Tabs>
        </ToursContextProvider>
        <Footer></Footer>
      </CartContextProvider>
    </>
  );
}

export default App;
