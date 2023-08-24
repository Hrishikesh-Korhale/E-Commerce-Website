import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getProductDetails } from "../../redux/action/ProductAction";
import ActionItem from "./ActionItem";
import { Box, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";

const Component = styled(Box)`
  margin-top: 55px;
  background: #f2f2f2;
`;

const Container = styled(Grid)`
    background: #FFFFFF;
    display: flex'
`;

const RightContainer = styled(Grid)`
  margin-top: 50px;
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
    <Component>
      {product && Object.keys(product).length && (
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
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
          </RightContainer>
        </Container>
      )}
    </Component>
  );
};

export default DetailView;
