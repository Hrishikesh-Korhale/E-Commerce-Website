import styled from "@emotion/styled";
import Banner from "./Banner";
import Navbar from "./Navbar";
import { Box } from "@mui/material";

const Container = styled(Box)`
padding: 10px;
background: #F2F2F2
`;

const Home = () =>{
    return(
        <Box>
            <Navbar />
            <Container>
            <Banner />
            </Container>
        </Box>
    )
}

export default Home;