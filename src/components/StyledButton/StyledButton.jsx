import { styled } from "@mui/material";

export const StyledButton = styled("button")({
  width: 37,
  height: 37,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#F3F3F3",
  border: "1px solid #B3B2B2",
  borderRadius: "50%",
  cursor: "pointer",
  transition: ".3s",
  "&:hover": {
    backgroundColor: "#03060f",
    color: "#fff",
  },
});
