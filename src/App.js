import Tabs from "./componentes/Tabs";
import Header from "./componentes/Header";
import CartContextProvider from "./contexts/CartContext";
import Cards from "./componentes/Cards";
import Carrousel from "./componentes/Carrousel";
import Footer from "./componentes/Footer";
import Booking from "./componentes/Booking";
import "./assets/styles/App.css"

function App() {

  return (
    <>
      <CartContextProvider>
        <Header />
        <Booking />
        <Cards></Cards>
        <Carrousel></Carrousel>
        <Tabs></Tabs>
        <Footer></Footer>
      </CartContextProvider>
    </>
  );
}

export default App;



