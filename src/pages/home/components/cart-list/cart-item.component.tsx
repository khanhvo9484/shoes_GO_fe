import { Product, ProductInCart } from "@/model/product.model";
import { Box, IconButton, TextField } from "@mui/material";
import plus from "@/assets/plus.png";
import minus from "@/assets/minus.png";
import trash from "@/assets/trash.png";
import { ENV } from "@/constant";

const CartItemComponent = (props: {
  shoe: ProductInCart;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: (product: Product) => void;
  style?: any;
}) => {
  const { shoe } = props;
  return (
    <Box sx={{ display: "flex", alignItems: "center", ...props.style }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "300px",
          minWidth: "100%",
        }}
      >
        <Box
          sx={{
            backgroundColor: shoe.color,
            height: "90px",
            width: "90px",
            borderRadius: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "20px",
            boxShadow: "20px 10px 20px 0px rgba(0, 0, 0, 0.115)",
            overflow: "visible",
            position: "relative",
          }}
        >
          <img
            src={shoe.image}
            alt={shoe.name}
            style={{
              width: "130px",
              overflow: "visible",
              overflowClipMargin: "50px",
              transform: "rotate(-30deg)",
              WebkitFilter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.2))",
              marginBottom: "20px",
            }}
          ></img>
        </Box>
        <Box sx={{ width: "200px" }}>
          <h5>{shoe.name}</h5>
          <p style={{ fontWeight: "bolder" }}>${shoe.price}</p>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <IconButton
                sx={{
                  backgroundColor: "#f0f0f0",
                  height: "28px",
                  width: "28px",
                }}
                onClick={() => {
                  props.removeFromCart(shoe as Product);
                }}
              >
                <img
                  src={minus}
                  alt="minus"
                  style={{ width: "10px", height: "10px" }}
                ></img>
              </IconButton>
              <input
                type="number"
                value={shoe.quantity}
                onChange={(e) => {
                  if (e.target.value === "") return;
                  const quantity = parseInt(e.target.value);
                  if (quantity < 0) return;
                  if (quantity > shoe.quantity) {
                    props.addToCart(shoe as Product);
                  } else {
                    props.removeFromCart(shoe as Product);
                  }
                }}
                style={{
                  border: "none",
                  height: "2rem",
                  width: "30px",
                  textAlign: "center",
                  marginLeft: "10px",
                }}
              ></input>
              <IconButton
                sx={{
                  backgroundColor: "#f0f0f0",
                  height: "28px",
                  width: "28px",
                }}
                onClick={(e) => {
                  props.addToCart(shoe as Product);
                }}
              >
                <img src={plus} alt="plus" style={{ width: "10px" }}></img>
              </IconButton>
            </Box>

            <Box>
              <IconButton
                sx={{ backgroundColor: ENV.COLOR.YELLOW }}
                onClick={() => {
                  props.clearCart(shoe as Product);
                }}
              >
                <img
                  src={trash}
                  alt="trash"
                  style={{ width: "10px", height: "10px" }}
                ></img>
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartItemComponent;
