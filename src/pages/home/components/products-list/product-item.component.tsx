import { ENV } from "@/constant";
import { Product, ProductInCart } from "@/model/product.model";
import { Button, Box, IconButton } from "@mui/material";
import check from "@/assets/check.png";
const ProductItemComponent = (props: {
  shoe: Product;
  style?: any;
  cart: ProductInCart[];
  addToCart: (product: Product) => void;
}) => {
  return (
    <Box
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        ...props.style,
      }}
    >
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Box
          style={{
            borderRadius: "28px",
            padding: "1rem",
            backgroundColor: props.shoe.color,
            width: "fit-content",
            height: "fit-content",
          }}
        >
          <img
            style={{
              width: "260px",
              transform: "rotate(-30deg)",
              WebkitFilter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.2))",
            }}
            src={props.shoe.image}
            alt={props.shoe.name}
          />
        </Box>
      </Box>

      <h3>{props.shoe.name}</h3>
      <p
        style={{
          color: ENV.COLOR.GRAY,
          fontSize: "smaller",
          lineHeight: "1.5rem",
        }}
      >
        {props.shoe.description}
      </p>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>${props.shoe.price}</h3>
        {props.cart &&
        props.cart.find((item: ProductInCart) => item.id === props.shoe.id) ? (
          <IconButton
            sx={{
              backgroundColor: ENV.COLOR.YELLOW,
              color: ENV.COLOR.BLACK,
              border: "none",
              cursor: "pointer",
              borderRadius: "50%",
              padding: "1rem",
            }}
          >
            <img style={{ width: "20px", height: "20px" }} src={check}></img>
          </IconButton>
        ) : (
          <Button
            sx={{
              backgroundColor: ENV.COLOR.YELLOW,
              color: ENV.COLOR.BLACK,
              borderRadius: "28px",
              border: "none",
              padding: "1.2rem 1rem",
              cursor: "pointer",
              height: "2.5em",
              fontWeight: "bold",
            }}
            onClick={() => props.addToCart(props.shoe)}
          >
            ADD TO CART
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default ProductItemComponent;
