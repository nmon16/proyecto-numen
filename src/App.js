import Tabs from "./componentes/Tabs";
import ToursContextProvider from "./contexts/ToursContext";
import Header from "./componentes/Header";
import CartContextProvider from "./contexts/CartContext";
import Body from "./componentes/Body";
import Carrousel from "./componentes/Carrousel";
import Footer from "./componentes/Footer";
import { BookingForm } from "./componentes/BookingBar2";


function App() {

  return (
    <>
      <CartContextProvider>
        <Header />
        <Carrousel></Carrousel>
          <BookingForm />
        
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
