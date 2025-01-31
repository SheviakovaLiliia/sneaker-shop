import { Box, Stack, Typography } from "@mui/material";

import s from "./CartCard.module.css";
import { StyledButton } from "../StyledButton";

export const CartCard = ({ product, deleteProduct }) => {
  return (
    <Stack
      sx={{ backgroundColor: "#fafafa" }}
      direction="row"
      // justifyContent="space-between"
      gap={4}
      alignItems="center"
      padding="16px 24px"
      mb={4}
    >
      <Box
        sx={{
          position: "relative",
          pr: 4,
          "&:after": {
            content: '""',
            width: "1px",
            height: "86px",
            backgroundColor: "#000",
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translate(0, -50%)",
          },
        }}
      >
        <img width="166px" src={product.image} alt="product" />
      </Box>
      <Typography sx={{ width: 200 }}>{product.name}</Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        gap={18}
      >
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="caption">PRICE:</Typography>
          <Typography variant="h6">{`${product.price}€`}</Typography>
        </Box>
        <StyledButton onClick={() => deleteProduct(product.id)}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5.29268H18C18 4.49056 17.6839 3.7213 17.1213 3.15412C16.5587 2.58693 15.7956 2.26829 15 2.26829C14.2044 2.26829 13.4413 2.58693 12.8787 3.15412C12.3161 3.7213 12 4.49056 12 5.29268ZM9.75 5.29268C9.75 4.59764 9.88579 3.9094 10.1496 3.26726C10.4135 2.62512 10.8002 2.04166 11.2877 1.55019C11.7752 1.05872 12.354 0.668864 12.9909 0.402882C13.6279 0.136899 14.3106 0 15 0C15.6894 0 16.3721 0.136899 17.0091 0.402882C17.646 0.668864 18.2248 1.05872 18.7123 1.55019C19.1998 2.04166 19.5865 2.62512 19.8504 3.26726C20.1142 3.9094 20.25 4.59764 20.25 5.29268H28.875C29.1734 5.29268 29.4595 5.41217 29.6705 5.62487C29.8815 5.83756 30 6.12603 30 6.42683C30 6.72762 29.8815 7.0161 29.6705 7.22879C29.4595 7.44149 29.1734 7.56098 28.875 7.56098H26.895L25.14 25.8752C25.0054 27.2785 24.3571 28.5809 23.3215 29.5284C22.286 30.4759 20.9375 31.0005 19.539 31H10.461C9.0628 31.0002 7.71465 30.4753 6.67942 29.5279C5.6442 28.5804 4.9961 27.2782 4.8615 25.8752L3.105 7.56098H1.125C0.826631 7.56098 0.540483 7.44149 0.329505 7.22879C0.118526 7.0161 0 6.72762 0 6.42683C0 6.12603 0.118526 5.83756 0.329505 5.62487C0.540483 5.41217 0.826631 5.29268 1.125 5.29268H9.75ZM12.75 12.4756C12.75 12.1748 12.6315 11.8863 12.4205 11.6736C12.2095 11.461 11.9234 11.3415 11.625 11.3415C11.3266 11.3415 11.0405 11.461 10.8295 11.6736C10.6185 11.8863 10.5 12.1748 10.5 12.4756V23.8171C10.5 24.1179 10.6185 24.4063 10.8295 24.619C11.0405 24.8317 11.3266 24.9512 11.625 24.9512C11.9234 24.9512 12.2095 24.8317 12.4205 24.619C12.6315 24.4063 12.75 24.1179 12.75 23.8171V12.4756ZM18.375 11.3415C18.6734 11.3415 18.9595 11.461 19.1705 11.6736C19.3815 11.8863 19.5 12.1748 19.5 12.4756V23.8171C19.5 24.1179 19.3815 24.4063 19.1705 24.619C18.9595 24.8317 18.6734 24.9512 18.375 24.9512C18.0766 24.9512 17.7905 24.8317 17.5795 24.619C17.3685 24.4063 17.25 24.1179 17.25 23.8171V12.4756C17.25 12.1748 17.3685 11.8863 17.5795 11.6736C17.7905 11.461 18.0766 11.3415 18.375 11.3415ZM7.101 25.6574C7.18191 26.4992 7.57087 27.2804 8.19205 27.8487C8.81324 28.4171 9.62212 28.7319 10.461 28.7317H19.539C20.3779 28.7319 21.1868 28.4171 21.8079 27.8487C22.4291 27.2804 22.8181 26.4992 22.899 25.6574L24.636 7.56098H5.364L7.101 25.6574Z"
              fill="black"
            />
          </svg>
        </StyledButton>
      </Stack>
    </Stack>
  );
};

// <div className={s.cartCard}>
//   <img src={product.image} alt="product" />
//   <div className={s.middleCard}>
//     <p className={s.middleCardName}>product.name</p>
//     <div className={s.middlePrice}>
//       <p className={s.middlePrice1}>PRICE:</p>
//       <p className={s.middlePrice2}>EUR</p>
//     </div>
//   </div>
//   <button className={s.deleteBtn}></button>
// </div>
