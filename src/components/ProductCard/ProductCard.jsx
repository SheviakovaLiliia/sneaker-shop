import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Stack,
  Box,
} from "@mui/material";
import s from "./ProductCard.module.css";
import { StyledButton } from "../StyledButton";

export const ProductCard = ({ product, addToCart }) => {
  return (
    <Card
      sx={{
        padding: 5,
        borderRadius: "20px",
        border: "2px solid #d9d9d9",
        width: "386px",
      }}
    >
      <CardContent>
        <img className={s.img} src={product.image} alt="product" />
        <Typography variant="h5">{product.name}</Typography>
      </CardContent>
      <CardActions>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={26}
        >
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="caption">PRICE:</Typography>
            <Typography variant="h6">{`${product.price}€`}</Typography>
          </Box>
          <StyledButton onClick={() => addToCart(product)}>+</StyledButton>
        </Stack>
      </CardActions>
    </Card>
  );
};

// <div className={s.card}>
//   <img src="" alt="img" />
//   <h3>product.name</h3>
//   <div className={s.cardInfo}>
//     <div className={s.cardPrice}>
//       <p className={s.cardPrice1}>PRICE: </p>
//       <p className={s.cardPrice2}> EUR</p>
//     </div>
//     <button className={s.addToCart}>+</button>
//   </div>
// </div>
