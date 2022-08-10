import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import ProductItem from "./ProductItem";

const Body = () => {

    const titleStyle = { textAlign: 'center', padding: '20px' }
    const { data, addToCart } = useContext(CartContext)

    return (
        <>
            <h2 style={titleStyle}>Paquetes</h2>

            <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-0">
                {data.products.map((product) =>
                    <ProductItem key={product.id} data={product} addToCart={addToCart} />
                )}
            </div>
        </>
    )
}

export default Body

// card-group d-flex flex-wrap justify-content-around