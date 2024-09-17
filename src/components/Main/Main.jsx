import { Container, Divider, Stack, Typography } from "@mui/material";

import { ProductCard } from "../ProductCard";
import s from "./Main.module.css";
import { useState, useEffect } from "react";
import { addToCart, fetchProducts } from "../../api";
export { addToCart } from "../../api";

export const Main = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts("posts")
      .then((res) => setProducts(res.data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <Container sx={{ mb: 6 }}>
      <Typography sx={{ textAlign: "left", mb: 4, mt: 9 }} variant="h4">
        Products
      </Typography>
      <Divider sx={{ mb: 5 }} />
      {error ? (
        <Typography>{error}</Typography>
      ) : (
        <Stack
          gap={10}
          direction="row"
          justifyContent={"space-evenly"}
          flexWrap="wrap"
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </Stack>
      )}
    </Container>
  );
};

// <main className={s.main}>
//   <News />
//   <h1>Products</h1>
//   <div className={s.cardList}>
//     {/* {products.map((product) => (
//       <ProductCard key={product.id} product={product} />
//     ))} */}
//     <ProductCard />
//     <ProductCard />
//     <ProductCard />
//   </div>
// </main>
