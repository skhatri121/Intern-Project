import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const CategoryFilter = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <Menu>
      <MenuButton
        textTransform="capitalize"
        cursor="pointer"
        color="primary.header"
        rightIcon={<BiChevronDown />}
        w="195px"
      >
        Categories
      </MenuButton>
      <MenuList>
        {categories.map((category) => (
          <MenuItem
            textTransform="capitalize"
            onClick={() => navigate(`/products/category/${category.slug}`)}
          >
            {category.slug}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CategoryFilter;
