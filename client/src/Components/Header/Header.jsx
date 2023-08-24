import styled from "@emotion/styled";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import Search from "./Search";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Menu } from "@mui/icons-material";
import { useState } from "react";

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

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;
const CustomButtonWrapper = styled(Box)(({ theme }) => ({
  marginLeft: "auto",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

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

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Header = () => {
  const [open, setOpen] = useState(false);

  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const list = () => (
    <Box style={{ width: 200 }} onClick={handleClose}>
      <List>
        <ListItem button>
          <CustomButton />
        </ListItem>
      </List>
    </Box>
  );
  return (
    <ThemeProvider theme={theme}>
      <StyledHeader>
        <Toolbar style={{ minHeight: 55 }}>
          <MenuButton onClick={handleOpen} color="inherit">
            <Menu />
          </MenuButton>
          <Drawer open={open} onClose={handleClose}>
            {list()}
          </Drawer>
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
    </ThemeProvider>
  );
};

export default Header;
