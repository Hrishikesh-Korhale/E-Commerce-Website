import styled from "@emotion/styled";
import { Box } from "@mui/material";

import Banner from "./Banner";
import Navbar from "./Navbar";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../../redux/action/ProductAction";
import MidSection from "./MidSection";


const Container = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;

const Home = () => {
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <Box>
      <Navbar />
      <Container>
        <Banner />
        <MidSlide products={products}/>
        <Slide products={products} title='Discount for You' timer={false}/>
        <MidSection />
        <Slide products={products} title='Suggesting Items' timer={false}/>
        <Slide products={products} title='Top Selection' timer={false}/>
        <Slide products={products} title='Recommended Items' timer={false}/>
        <Slide products={products} title='Trending Offers' timer={false}/>
        <Slide products={products} title="Season's top picks " timer={false}/>
        <Slide products={products} title='Top deals on Accessories' timer={false}/>

      </Container>
    </Box>
  );
};

export default Home;
