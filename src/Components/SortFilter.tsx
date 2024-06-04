import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

const SortFilter = ({ sortHighestPrice, sortLowestPrice }) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        textTransform="capitalize"
        cursor="pointer"
        color="primary.header"
        rightIcon={<BiChevronDown color="primary.htext" />}
        w="195px"
      >
        Sort By
      </MenuButton>
      <MenuList>
        <MenuItem onClick={sortHighestPrice}>Low to High price</MenuItem>
        <MenuItem onClick={sortLowestPrice}>High to Low price</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortFilter;
