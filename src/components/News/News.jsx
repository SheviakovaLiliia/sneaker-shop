import Banner from "../../assets/Banner.jpg";
import { Box, Container } from "@mui/material";
import s from "./News.module.css";

export const News = () => {
  return (
    <Container>
      <Box
        sx={{
          backgroundImage: `url(${Banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: 420,
        }}
      ></Box>
    </Container>
  );
};
