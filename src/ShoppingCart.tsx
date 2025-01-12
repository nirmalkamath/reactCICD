
import { useState, useReducer } from "react";

// Step 1: Define the reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case "add_to_cart":
      // Check if the item already exists in the cart
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        // Update quantity if item exists
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item to the cart
        return [...state, { ...action.payload, quantity: 1 }];
      }

    case "remove_from_cart":
      // Remove the item with the given id
      return state.filter((item) => item.id !== action.payload);

    case "clear_cart":
      // Clear the entire cart
      return [];

    case "update_quantity":
      // Update quantity of a specific item
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

    default:
      return state; // Return the current state if the action is unknown
  }
};

function ShoppingCart() {
  // Step 2: Initialize `useReducer` with the cartReducer and an empty array
  const [cart, dispatch] = useReducer(cartReducer, []);

  // Sample product list
  const products = [
    { id: 1, name: "Apple", price: 50 },
    { id: 2, name: "Banana", price: 20 },
    { id: 3, name: "Cherry", price: 100 },
  ];

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>

      {/* Step 3: Display Product List */}
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ₹{product.price}
            <button
              onClick={() =>
                dispatch({ type: "add_to_cart", payload: product })
              }
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

      {/* Step 4: Display Cart Items */}
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ₹{item.price} x {item.quantity}
              <button
                onClick={() =>
                  dispatch({ type: "remove_from_cart", payload: item.id })
                }
              >
                Remove
              </button>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  dispatch({
                    type: "update_quantity",
                    payload: { id: item.id, quantity: +e.target.value },
                  })
                }
                style={{ width: "50px", marginLeft: "10px" }}
                min="1"
              />
            </li>
          ))}
        </ul>
      )}

      {/* Step 5: Show Total Price */}
      <h3>Total Price: ₹{totalPrice}</h3>

      {/* Step 6: Clear Cart Button */}
      <button onClick={() => dispatch({ type: "clear_cart" })}>Clear Cart</button>
    </div>
  );
}

export default ShoppingCart;
