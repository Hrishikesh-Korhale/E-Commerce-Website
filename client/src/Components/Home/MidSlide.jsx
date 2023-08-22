import styled from "@emotion/styled";
import Slide from "./Slide";
import { Box } from "@mui/material";

const Container = styled(Box)`
    display: flex;
`;

const LeftContainer = styled(Box)`
    width: 83%
`;

const RightContainer = styled(Box)`
    background: #FFFFFF;
    padding : 5px;
    margin-top: 10px;
    margin-left: 10px;
    width: 17%;
    text-align: center;
`;

const MidSlide = ({products}) =>{
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    return(
        <Container>
            <LeftContainer>
            <Slide 
                    products={products} 
                    title='Deals of the Day'
                    timer={true} 
                    multi={true} 
                />
            </LeftContainer>
            <RightContainer>
                <img src={adURL} alt="advertise" style={{width: 217}} />
            </RightContainer>
        </Container>
    )
}
export default MidSlide;