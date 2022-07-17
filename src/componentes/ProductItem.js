import './card.css'

const ProductItem = ({ data, addToCart }) => {

  let { id, name, price, text, imageSource } = data;

  return (

    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        <div className='card'>
          <div className='overflow'>
            <img src={imageSource} alt='card_img' className='card-img-top' />
          </div>
          <div className='card-Body'></div>
          <h4 className='card-title'>{name}</h4>
          <p className='card-text text-secondary'>{text}</p>
          <div >{price}</div>
          <button className='btn btn-outline-secondary border-0' onClick={() => addToCart(id)}>Reservar</button>
        </div >
      </div>
    </div>

    // <div className="col-md-4" key={card.id}>
    //   <Card tittle={card.name} imageSource={card.image} text={card.text} price={card.price} id={card.id} addToCart={addToCart} />
    // </div>

    // <div style={{ border: "thin solid gray", padding: "1rem" }}>
    //   <h4>{name}</h4>
    //   <h5>${price}.00</h5>
    //   <button onClick={() => addToCart(id)}>Agregar</button>
    // </div>
  );
};

export default ProductItem;
