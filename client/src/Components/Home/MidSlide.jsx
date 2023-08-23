import styled from "@emotion/styled";
import Slide from "./Slide";
import { Box } from "@mui/material";
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

const Container = styled(Box)`
    display: flex;
`;

const LeftContainer = styled(Box)(({ theme}) => ({
    width: '83%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}))

const RightContainer = styled(Box)(({ theme}) => ({
    marginTop: 10,
    background: '#FFFFFF',
    width: '17%',
    marginLeft: 10,
    padding: 5,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const MidSlide = ({products}) =>{
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    return(
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    )
}
export default MidSlide;