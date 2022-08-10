import image1 from '../ASES/viñedos.jpg'
import image2 from '../ASES/rafting.jpg'
import image3 from '../ASES/aconcagua.jpg'

export const ACTIONS = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_ONE_FROM_CART: "REMOVE_ONE_FROM_CART",
  REMOVE_ALL_FROM_CART: "REMOVE_ALL_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};

export const shoppingInitialState = {
  products: [
    {
        id: 1,
        name: 'Viñedos',
        image: image1,
        text: 'Por su ubicacion geografica, la provincia de Mendoza tiene buenas condiciones para la produccion de vino.',
        price: '$150.000'
    },
    {
        id: 2,
        name: 'Rafting',
        image: image2,
        text : 'Argentina Rafting Expeditions es su destino para todos sus deportes de aventura en Mendoza.',
        price: '$170.000'

    },
    {
        id: 3,
        name: 'Aconcagua',
        image: image3,
        text: 'El Aconcagua es una montaña ubicada en el departamento Las Heras, provincia de Mendoza.',
        price: '$190.000'

    },
],
  cart: []
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      //console.log(newItem);

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case ACTIONS.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case ACTIONS.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case ACTIONS.CLEAR_CART:
      return shoppingInitialState;
    default:
      return state;
  }
}
