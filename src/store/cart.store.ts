import { Ticket } from "@/lib/types";
import { create } from "zustand";

interface CartState {
  products: Ticket[];
  addProduct: (product: Ticket) => void;
  removeProduct: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, product],
    })),
  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),
  clearCart: () => set({ products: [] }),
}));
