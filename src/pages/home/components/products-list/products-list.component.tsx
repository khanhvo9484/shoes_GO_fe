import { Box, CircularProgress } from "@mui/material";
import { ENV } from "../../../../constant";
import nike from "@/assets/nike.png";
import circlePattern from "@/assets/circlePattern.png";
import { _axios } from "@/api/axios";
import { Product, ProductInCart } from "@/model/product.model";
import ProductItemComponent from "./product-item.component";

const ProductsListComponent = (props?: {
  style?: any;
  products: Product[];
  cart: ProductInCart[];
  isLoading: boolean;
  addToCart: (product: Product) => void;
}) => {
  const { products, isLoading, cart } = props;
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
        <h2 style={{ color: ENV.COLOR.BLACK, marginTop: "0.2rem" }}>
          Our product
        </h2>
      </Box>
      <Box
        sx={{
          overflowY: "scroll",
          height: "calc(100% - 100px)",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {isLoading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress
              sx={{ color: ENV.COLOR.YELLOW }}
            ></CircularProgress>
          </Box>
        )}
        {products.length > 0 && !isLoading ? (
          <ul
            style={{
              padding: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {products.map((product, index) => (
              <ProductItemComponent
                key={product.id}
                shoe={product}
                style={
                  index === 0 ? { marginBottom: "40px" } : { margin: "40px" }
                }
                addToCart={props.addToCart}
                cart={cart}
              />
            ))}
          </ul>
        ) : null}
        {products.length === 0 && !isLoading && (
          <p style={{ color: ENV.COLOR.BLACK }}>No product found.</p>
        )}
      </Box>
    </Box>
  );
};

export default ProductsListComponent;
