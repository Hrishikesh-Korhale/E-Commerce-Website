import styled from "@emotion/styled";
import Banner from "./Banner";
import Navbar from "./Navbar";
import { Box } from "@mui/material";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../../redux/action/ProductAction";

const Container = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;

const Home = () => {
  const { products } = useSelector((state) => state.getProducts);
  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <Box>
      <Navbar />
      <Container>
        <Banner />
      </Container>
    </Box>
  );
};

export default Home;
