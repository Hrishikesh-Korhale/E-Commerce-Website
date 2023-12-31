import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Grid, Typography, Button } from "@mui/material";
import CartItem from "./CartItem";
import TotalBalance from "./TotalBalance";
import styled from "@emotion/styled";
import EmptyCart from "./EmptyCart";
import { clearCart } from "../../redux/action/cartAction"; // Import the action to clear the cart

const GridContainer = styled(Grid)`
  padding: 30px 135px;
`;
const LeftComponent = styled(Grid)`
  padding-right: 15;
  @media (max-width: 600px) {
    margin-bottom: 15px;
  }
`;

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;

const BottomWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  border-radius: 2px;
  width: 250px;
  height: 51px;
`;
const Cart = () => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const handlePlaceOrder = () => {
    alert("Your order has been placed successfully!");
    dispatch(clearCart());
  };

  return (
    <>
      {cartItems.length ? (
        <GridContainer container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography style={{ fontWeight: 600, fontSize: 18 }}>
                My Cart ({cartItems?.length})
              </Typography>
            </Header>
            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}
            <BottomWrapper>
              <StyledButton variant="contained" onClick={handlePlaceOrder}>
                Place Order
              </StyledButton>
            </BottomWrapper>
          </LeftComponent>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalBalance cartItems={cartItems} />
          </Grid>
        </GridContainer>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};
export default Cart;
