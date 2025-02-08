



"use client";

import { useCart } from "@/context/cartContext";

const CartPage = () => {
  const { cart, removeFromCart, clearCart,incrementQuantity, decrementQuantity } = useCart();

  return (
    <div className="cart-page  p-6">
      <h1 className="text-2xl font-bold">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="mt-4">Cart is empty</p>
      ) : (
        <div className="mt-4">
          {cart.map((item) => (
            <div key={item.slug} className="flex justify-between p-4 border-b">
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p>Price: ${item.price}</p>
                <div className="quantity-controls flex items-center">
                  <button 
                    className="px-2 py-1 border rounded" 
                    onClick={() => decrementQuantity(item.slug)}  // Decrease quantity
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>  {/* Display quantity */}
                  <button 
                    className="px-2 py-1 border rounded" 
                    onClick={() => incrementQuantity(item.slug)}  // Increase quantity
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="px-3 py-1 bg-red-500 text-white rounded-md"
                onClick={() => removeFromCart(item._id)}   
              >
                Remove
              </button>
            </div>
          ))}
          <button
            className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
