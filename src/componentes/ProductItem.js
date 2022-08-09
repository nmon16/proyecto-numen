// import "./card.css"
import { Button } from '@mui/material'
import { ShoppingCartRounded } from '@mui/icons-material'



const ProductItem = ({ data, addToCart }) => {

  let { id, name, price, text, image } = data;

  return (

    // <div classNameName="container d-flex justify-content-center align-items-center h-100">
    //   <div classNameName="row">
    //     <div classNameName='card'>
    //       <div classNameName='overflow'>
    //         <img src={image} alt='card_img' classNameName='card-img-top' />
    //       </div>
    //       <div classNameName='card-Body'></div>
    //       <h4 classNameName='card-title'>{name}</h4>
    //       <p classNameName='card-text text-secondary'>{text}</p>
    //       <a href='#!' classNameName='btn btn-outline-secondary border-0'>{price}</a>
    //       <Button classNameName='btn btn-outline-secondary border-0' style={{color:"red"}} onClick={() => addToCart(id)} variant="text" startIcon={<ShoppingCartRounded />}>
    //         Reservar
    //       </Button>
    //     </div >
    //   </div>
    // </div>

      <div className="col p-5">
        <div className="card">
          <img src={image} className="card-img-top" height="300px" alt="card_img" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{text}</p>
            <p className="card-text">{price}</p>
          </div>
          <div className="card-footer">
            <Button classNameName='btn btn-outline-secondary border-0' style={{ color: "red" }} onClick={() => addToCart(id)} variant="text" startIcon={<ShoppingCartRounded />}>
              Reservar
            </Button>
          </div>
      </div>

      </div>
  );
}


export default ProductItem;


