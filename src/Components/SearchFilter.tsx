import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

const SearchFilter = ({ searchQuery, handleSearchInputChange }) => {
  return (
    <InputGroup>
      <Input
        type="search"
        placeholder="Search items"
        sx={{ "::placeholder": { color: "primary.htext" } }}
        w="100%"
        id="search-product"
        className="search-input"
        value={searchQuery}
        onChange={handleSearchInputChange}
        color="primary.htext"
        width="195px"
      />
      <InputLeftElement>
        <CiSearch color="primary.htext" />
      </InputLeftElement>
    </InputGroup>
  );
};

export default SearchFilter;
