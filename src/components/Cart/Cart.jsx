import s from "./Cart.module.css";
import { CartCard } from "../CartCard";
import { Container, Stack, Typography, Divider } from "@mui/material";
import { useState, useEffect } from "react";
import { fetchProducts } from "../../api";
import { deleteFromCart } from "../../api";

export const Cart = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchProducts("articles")
      .then((res) => setProducts(res.data))
      .catch((err) => setError(err.message));
  }, []);

  useEffect(() => {
    setTotal(
      products.reduce((acc, product) => {
        return acc + product.price;
      }, 0)
    );
  }, [products]);

  const deleteProduct = (id) => {
    deleteFromCart(id)
      .then(() =>
        fetchProducts("articles").then((res) => setProducts(res.data))
      )
      .catch((err) => setError(err.message));
  };

  return (
    <Container>
      <Typography sx={{ textAlign: "left", mb: 4, mt: 9 }} variant="h4">
        Cart
      </Typography>
      <Divider sx={{ mb: 5 }} />
      <Stack direction="row" gap={10} justifyContent="space-between">
        {error ? (
          <Typography>{error}</Typography>
        ) : (
          <Stack gap={10}>
            {products.map((product) => (
              <CartCard
                key={product.id}
                product={product}
                deleteProduct={deleteProduct}
              />
            ))}
          </Stack>
        )}
        <Stack
          sx={{ backgroundColor: "#FAFAFA", padding: 2, width: 388, mb: 5 }}
        >
          <Typography sx={{ mb: 1 }} variant="h5">
            Total
          </Typography>
          <Stack sx={{ mb: 8, gap: 1, pr: 2 }}>
            {products.map((product) => (
              <Typography key={product.id} textAlign="left">
                {product.name}
              </Typography>
            ))}
          </Stack>
          <Divider />
          <Stack alignItems="start" gap={1} sx={{ mt: 1, mb: 2 }}>
            <Typography variant="caption">PRICE:</Typography>
            <Typography variant="h6">{total}€</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

// <main className={s.main}>
//   <h1>Cart</h1>
//   <div className={s.cartBody}>
//     <div className={s.cartCards}>
//       <CartCard />
//       <CartCard />
//     </div>
//     <div className={s.result}>
//       <h2>Total</h2>
//       <p>name</p>
//       <p>name2</p>
//       <div className={s.totalPrice}>
//         <p className={s.totalPrice1}>PRICE:</p>
//         <p className={s.totalPrice}>EUR</p>
//       </div>
//     </div>
//   </div>
// </main>
