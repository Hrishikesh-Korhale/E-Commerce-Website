import styled from "@emotion/styled";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import Search from "./Search";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;
const CustomButtonWrapper = styled(Box)`
  margin-left: auto;
`;

const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-decoration: none;
  color: inherit;
`;
const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;
const PlusImg = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <Component to={`/`}>
          <img src={logoURL} alt="Logo" style={{ width: 75 }} />
          <Box display={"flex"}>
            <SubHeading>
              Explore &nbsp;
              <Box component="span" style={{ color: "#ffe500" }}>
                Plus
              </Box>
            </SubHeading>
            <PlusImg src={subURL} alt="sublogo" />
          </Box>
        </Component>
        <Search />
        <CustomButtonWrapper>
          <CustomButton />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
