import Tabs from "./componentes/Tabs";
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
        <Booking />
        <Body></Body>
        <Carrousel></Carrousel>
        <Tabs></Tabs>
        <Footer></Footer>
      </CartContextProvider>
    </>
  );
}

export default App;



