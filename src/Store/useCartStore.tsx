import { create } from "zustand";
import toast from "react-hot-toast";

const useCartStore = create((set) => ({
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  addToCart: (item, quantity = 1) =>
    set((state) => {
      const existingItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cartItems];
        updatedCart[existingItemIndex].quantity += quantity;
        toast.success("Quantity added", { duration: 1000 });
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
        return {
          cartItems: updatedCart,
        };
      } else {
        const updatedCart = [
          ...state.cartItems,
          { ...item, quantity: quantity },
        ];
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
        toast.success("Added to Cart!", { duration: 1000 });
        return { cartItems: updatedCart };
      }
    }),

  clearCart: () => {
    set({ cartItems: [] });
    localStorage.removeItem("cartItems");
  },

  removeFromCart: (itemId) => {
    useCartStore.setState((state) => {
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== itemId
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      toast("Removed from cart", { duration: 1000 });
      return { cartItems: updatedCartItems };
    });
  },
}));

export default useCartStore;
