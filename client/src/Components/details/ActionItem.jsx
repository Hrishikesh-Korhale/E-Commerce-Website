import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("md")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  padding: "15px",
  maxWidth: "100%", // Set maximum width to ensure responsiveness
  height: "auto",
});

const StyledButton = styled(Button)`
  width: 48%;
  border-radius: 2px;
  height: 50px;
  color: #fff;
`;

const ActionItem = ({ product }) => {
  return (
    <ThemeProvider theme={theme}>
      <LeftContainer>
        <Box style={{ border: "1px solid #f0f0f0", width: "90%" }}>
          <Image src={product.detailUrl} />
        </Box>
        <StyledButton
          style={{ marginRight: 10, background: "#ff9f00" }}
          variant="contained"
        >
          <Cart />
          Add to Cart
        </StyledButton>
        <StyledButton style={{ background: "#fb641b" }} variant="contained">
          <Flash /> Buy Now
        </StyledButton>
      </LeftContainer>
    </ThemeProvider>
  );
};

export default ActionItem;
