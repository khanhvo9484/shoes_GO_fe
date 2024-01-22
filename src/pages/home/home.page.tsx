import Wave from "react-wavify";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { ENV } from "../../constant";

import ProductsListComponent from "./components/products-list/products-list.component";
import CardListComponent from "./components/cart-list/cart-list.component";

import "./styles/index.css";
import { Product, ProductInCart } from "@/model/product.model";
import { _axios } from "@/api/axios";
import wave from "@/assets/wave.svg";

const HomePage = () => {
  document.title = "Home";
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<ProductInCart[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const addToCart = (product: Product) => {
    const item = cart.find((item) => item.id === product.id);
    if (item) {
      item.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([
        ...cart,
        { ...product, quantity: 1 as number } as ProductInCart,
      ]);
    }
  };
  const removeFromCart = (product: Product) => {
    const item = cart.find((item) => item.id === product.id);
    if (item) {
      item.quantity -= 1;
      if (item.quantity === 0) {
        const newCart = cart.filter((item) => item.id !== product.id);
        setCart([...newCart]);
        return;
      }
      setCart([...cart]);
    }
  };
  const clearCart = (product: Product) => {
    const item = cart.find((item) => item.id === product.id);
    if (item) {
      item.quantity = 0;
      const newCart = cart.filter((item) => item.id !== product.id);
      setCart([...newCart]);
    }
  };
  useEffect(() => {
    _axios
      .get("/products")
      .then((res) => {
        setProducts(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);
  return (
    <Box
      style={{
        backgroundColor: "transparent",
        margin: 0,
        height: "calc(100%-80px)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5rem",
          zIndex: 99,
          backgroundColor: "transparent",
          // width: "fit-content",
        }}
      >
        <div
          style={{
            width: "fit-content",
            height: "fit-content",
            marginRight: "20px",
            background: "transparent",
          }}
        >
          <ProductsListComponent
            products={products}
            addToCart={addToCart}
            cart={cart}
            isLoading={loading}
          />
        </div>
        <div style={{ marginLeft: "20px", background: "transparent" }}>
          <CardListComponent
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
          />
        </div>
      </div>

      <Box>
        <img
          src={wave}
          style={{
            display: "flex",
            position: "absolute",
            bottom: 0,
            width: "100%",
            margin: 0,
            zIndex: -1,
            height: "auto",
          }}
        ></img>
        {/* <Wave
          fill={ENV.COLOR.YELLOW}
          paused={false}
          options={{
            height: 400,
            amplitude: 6000,
            speed: 1,
            points: 1,
          }}
          style={{
            display: "flex",
            position: "absolute",
            bottom: 0,
            width: "100%",
            margin: 0,
            zIndex: 1,
          }}
        /> */}
      </Box>
    </Box>
  );
};

export default HomePage;
