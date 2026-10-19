import { createContext, useCallback, useContext, useMemo } from 'react';
import useLocalStorage from './useLocalStorage';

const CartContext = createContext(null);

/**
 * Cart state shared by the menu, navbar badge and cart drawer.
 * Contents persist in localStorage via useLocalStorage (safe fallbacks inside).
 */
export function CartProvider({ children }) {
  const [items, setItems] = useLocalStorage('naba-cart-v1', []);
  const [isOpen, setIsOpen] = useLocalStorage('naba-cart-open-v1', false);

  const add = useCallback(
    (product) => {
      setItems((prev) => {
        const existing = prev.find((item) => item.id === product.id);
        if (existing) {
          return prev.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          );
        }
        return [
          ...prev,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            alt: product.alt,
            qty: 1,
          },
        ];
      });
    },
    [setItems]
  );

  const increment = useCallback(
    (id) => {
      setItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item))
      );
    },
    [setItems]
  );

  const decrement = useCallback(
    (id) => {
      setItems((prev) =>
        prev
          .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
          .filter((item) => item.qty > 0)
      );
    },
    [setItems]
  );

  const remove = useCallback(
    (id) => setItems((prev) => prev.filter((item) => item.id !== id)),
    [setItems]
  );

  const clear = useCallback(() => setItems([]), [setItems]);

  const value = useMemo(() => {
    const count = items.reduce((sum, item) => sum + item.qty, 0);
    const total = items.reduce((sum, item) => sum + item.qty * item.price, 0);
    return {
      items,
      count,
      total,
      add,
      increment,
      decrement,
      remove,
      clear,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
    };
  }, [items, add, increment, decrement, remove, clear, isOpen, setIsOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
  return ctx;
}

export default CartProvider;
