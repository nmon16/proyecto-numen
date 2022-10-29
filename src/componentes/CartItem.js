import { useContext } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import { CartContext } from "../contexts/CartContext";
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = ({data}) => {

  const { addToCart, delFromCart } = useContext(CartContext)
  let { id, name, price, quantity } = data;

  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <h4>{name}</h4>
      <div className="d-flex align-items-center">
        USD {price}.00
        <div>
          <IconButton aria-label="add" size="small" onClick={() => addToCart(id)}>
            <AddIcon fontSize="small" />
          </IconButton>
        </div>

        <div><span>{quantity}</span></div>

        <div>
          <IconButton aria-label="remove" size="small" onClick={() => delFromCart(id)}>
            <RemoveIcon fontSize="small" />
          </IconButton>
        </div> = USD {price * quantity}.00
        <IconButton>
          <DeleteIcon onClick={() => delFromCart(id, true)}></DeleteIcon>
        </IconButton>
      </div>
    </div>
  );
};

export default CartItem;
