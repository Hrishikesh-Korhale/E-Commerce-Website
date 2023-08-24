import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getProductDetails } from "../../redux/action/ProductAction";
import ActionItem from "./ActionItem";
import { Box, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";
import ProductDetail from "./ProductDetail";
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

const Component = styled(Box)`
  margin-top: 55px;
  background: #f2f2f2;
`;

const Container = styled(Grid)(({ theme }) => ({
  background: "#FFFFFF",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));

const RightContainer = styled(Grid)`
  margin-top: 50px;
  padding: 0 20px;
  max-width: 100%;
  & > p {
    margin-top: 10px;
  }
`;

const DetailView = () => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const dispatch = useDispatch();
  const { id } = useParams();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, product } = productDetails;
  console.log(`it's a product ${product}`);

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, id, product, loading]);
  return (
    <ThemeProvider theme={theme}>
      <Component>
        {product && Object.keys(product).length && (
          <Container container>
            <Grid item lg={4} md={4} sm={8} xs={12}>
              <ActionItem product={product} />
            </Grid>
            <RightContainer item lg={8} md={8} sm={12} xs={12}>
              <Typography>{product.title.longTitle}</Typography>
              <Typography
                style={{ marginTop: 5, color: "#878787", fontSize: 14 }}
              >
                8 Ratings & 1 Reviews
                <span>
                  <img
                    src={fassured}
                    alt="fassured"
                    style={{ width: 77, marginLeft: 20 }}
                  />
                </span>
              </Typography>
              <Typography>
                <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>
                &nbsp;&nbsp;&nbsp;
                <span style={{ color: "#878787" }}>
                  <strike>₹{product.price.mrp}</strike>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span style={{ color: "#388E3C" }}>
                  {product.price.discount} off
                </span>
              </Typography>
              <ProductDetail product={product} />
            </RightContainer>
          </Container>
        )}
      </Component>
    </ThemeProvider>
  );
};

export default DetailView;
