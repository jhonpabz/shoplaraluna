import { CartItem } from "../types";

export const generateMessengerLink = (cartItems: CartItem[]): string => {
  if (cartItems.length === 0) {
    return "";
  }

  const cartMessage = cartItems
    .map(
      (item) =>
        `${item.name} (Qty: ${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`,
    )
    .join("\n");

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const message = `Hi! I'm interested in the following items from LaraLuna Pet Shop:\n\n${cartMessage}\n\nTotal: $${totalPrice.toFixed(2)}\n\nPlease let me know more details and how to proceed with the order.`;

  const encodedMessage = encodeURIComponent(message);
  return `https://m.me/LaraLuna Pet Shop?text=${encodedMessage}`;
};
