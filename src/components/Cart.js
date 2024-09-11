import { useDispatch, useSelector } from "react-redux";
import BlogCard from "./BlogCard";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
const cartItems = useSelector((store) => store.cart.blogItems);

const dispatch = useDispatch();
const handleClearCart = () => {
  // dispatch action
  dispatch(clearCart());
}

  return (
    <div className="container mx-auto m-4">
      <h2 className="font-bold text-xl">Cart</h2>
      <div className="my-2"><button className="px-3 py-1 text-white bg-slate-600 rounded-lg" onClick={handleClearCart}>Clear Cart</button></div>
      
      {cartItems.length === 0 ? <h2 className="font-semibold text-lg my-2">Cart is empty. Add items to your cart!</h2> :
      <ul>
      {
        cartItems.map((item,index)=>(              
          <li className="">
            <BlogCard blogData={item} />
          </li>              
        ))
      }
      </ul>
      }
    </div>
  )
}

export default Cart;