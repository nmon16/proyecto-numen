import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import useAxios from "../hooks/useAxios";
import CardButton from "./CardButton";

const Cards = () => {

    const { addToCart } = useContext(CartContext)

    const { data, isLoading, error } = useAxios('http://localhost:8000/cartInitialState')

    return (
        <>
            <h2 className="text-center p-3" id="paquetes">Paquetes exclusivos en Mendoza</h2>
            <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-0">
                {
                    isLoading ? <div>Cargando petición...</div> :
                        error.isError ? <div>Hubo un error: {error.message}</div> :
                            data.length === 0 ? null :
                                data.products.map((product, index) =>
                                    <div className="col p-5">
                                        <div key={index} className="card h-100" >
                                            <img src={require(`../assets/img/PackagesCards/${product.image}`)} className="card-img-top d-block w-100" alt="card_img" />
                                            <div className="card-body">
                                                <h5 className="card-title">{product.name}</h5>
                                                <p className="card-text">{product.text}</p>
                                            </div>
                                            <div className="card-footer text-center">
                                                <p className="card-text">USD {product.price}</p>
                                                <CardButton key={index} data={product} addToCart={addToCart} />
                                            </div>
                                        </div>
                                    </div>
                                )}
            </div>
        </>
    )
}

export default Cards