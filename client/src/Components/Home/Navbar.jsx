import { Box, Typography } from "@mui/material"
import { navData } from "../../constants/data";
import styled from "@emotion/styled";
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

const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '55px 130px 0 130px !important',
    overflowX: 'hidden',
    [theme.breakpoints.down('lg')]: {
        margin: '0px !important'
    }
}))

const Container = styled(Box)`
padding: 12px 8px;
text-align: center;
`;

const Text = styled(Typography)`
font-size: 14px;
font-weight: 600;
font-family: inherit;
`
const Navbar = () => {
    return(
        <ThemeProvider theme={theme}>
        <Component>
            {
                navData.map(data =>(
                    <Container>
                        <img src={data.url} alt="nav" style={{width: 64}}/>
                        <Text>{data.text}</Text>
                    </Container>
                ))
            }
        </Component>
        </ThemeProvider>
    )
}

export default Navbar;