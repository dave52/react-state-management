export default function cartReducer(cart, action) {
  switch (action.type) {
    case "add":
        const { id, sku } = action;
        const itemsInCart = cart.find((i) => i.sku === sku);
        if (itemsInCart) {
          return cart.map((i) =>
            i.sku === sku ? { ...i, quantity: i.quantity + 1 } : i
          );
        } else {
          return [...cart, { id, sku, quantity: 1 }];
        }
    case "update": {
      const { sku, quantity } = action;
        return quantity === 0
          ? cart.filter((i) => i.sku !== sku)
          : cart.map((i) => (i.sku === sku ? { ...i, quantity } : i));
    }
    case "empty":
      return [];
    default:
      throw new Error("Unhandled action "+ action.type);
  }
}