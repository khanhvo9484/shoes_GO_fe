import { ENV } from "@/constant";
import { Box } from "@mui/material";
import nike from "@/assets/nike.png";
import circlePattern from "@/assets/circlePattern.png";
import { Product, ProductInCart } from "@/model/product.model";
import CartItemComponent from "./cart-item.component";
const CardListComponent = (props?: {
  style?: any;
  cart: ProductInCart[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: (product: Product) => void;
}) => {
  const { cart, addToCart, removeFromCart, clearCart } = props;
  return (
    <Box
      sx={{
        height: "600px",
        width: "300px",
        borderRadius: "28px",
        backgroundColor: ENV.COLOR.WHITE,
        backgroundImage: `url(${circlePattern})`,
        backgroundSize: "250px 250px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top -80px left -120px",
        padding: "12px 28px",
        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.225)",
        ...props.style,
      }}
    >
      <Box style={{ position: "relative", overflow: "hidden" }}>
        <img src={nike} alt="Nike" style={{ width: "60px", zIndex: 100 }}></img>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ color: ENV.COLOR.BLACK, marginTop: "0.2rem" }}>
            Your cart
          </h2>
          <h2 style={{ marginTop: "0.2rem" }}>
            $
            {cart.length > 0
              ? cart
                  .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
                  .toFixed(2)
              : 0}
          </h2>
        </Box>
      </Box>
      <Box
        sx={{
          overflowY: "scroll",
          height: "calc(100% - 100px)",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {cart.length > 0 ? (
          <ul
            style={{
              padding: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {cart.map((product, index) => (
              <CartItemComponent
                key={product.id + index}
                shoe={product}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
                style={index === 0 ? { marginTop: "0" } : { margin: "20px" }}
              />
            ))}
          </ul>
        ) : (
          <p style={{ color: ENV.COLOR.BLACK }}>Your cart is empty.</p>
        )}
      </Box>
    </Box>
  );
};

export default CardListComponent;
