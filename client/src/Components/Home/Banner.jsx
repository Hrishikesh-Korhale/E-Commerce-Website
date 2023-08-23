import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { bannerData } from '../../constants/data';
import styled from '@emotion/styled';
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

const Image = styled('img')(({ theme }) => ({
  width: '100%',
  height: 280,
  [theme.breakpoints.down('sm')]: {
      objectFit: 'cover',
      height: 180
  }
}));

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const Banner = () => {
    return(
      <ThemeProvider theme={theme}>
        <Carousel responsive={responsive}
        swipeable={false}
        draggable={false}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}>
            {
                bannerData.map(data =>(
                    <Image src={data.url} alt='banner' />
                ))
            }
        </Carousel>
        </ThemeProvider>
    )
}

export default Banner;