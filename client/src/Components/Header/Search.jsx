import styled from "@emotion/styled";
import { Box, InputBase, List, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/action/ProductAction";
import { Link } from "react-router-dom";

const SearchContainer = styled(Box)`
  background: #fff;
  border-radius: 2px;
  margin-left: 10px;
  width: 38%;
  display: flex;
`;

const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
  color: #2874f0;
  padding: 5px;
  display: flex;
`;

const ListWrapper = styled(List)`
  position: absolute;
  background: #ffffff;
  color: #000;
  margin-top: 36px;
`;

const Search = () => {
  const [Text, setText] = useState("");

  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const getText = (e) => setText(e);
  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for products, brands and more"
        onChange={(e) => getText(e.target.value)}
        value={Text}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {Text && (
        <ListWrapper>
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(Text.toLowerCase())
            )
            .map((product) => (
              <Link
                to={`product/${product.id}`}
                onClick={() => setText("")}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItem>{product.title.longTitle}</ListItem>
              </Link>
            ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
};

export default Search;
