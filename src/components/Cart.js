import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold ">Cart</h1>
      <div className="text-right">
        <button
          className="px-4 py-2 bg-green-100 m-4 rounded-lg font-semibold"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length == 0 && (
        <h1>Cart is Empty🛒 Add Items to the Cart!😋</h1>
      )}
      <div className="w-6/12 m-auto border ">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
