import { Heading, Box, Link, useMediaQuery } from "@chakra-ui/react";

import { CiShoppingCart } from "react-icons/ci";
import useCartStore from "../Store/useCartStore";
import HamburgerMenu from "./HamburgerMenu";
const Navbar = () => {
  const [isSmallerThan790] = useMediaQuery("(max-width: 790px)");
  const [isSmallerThan560] = useMediaQuery("(max-width: 560px)");
  const cartItems = useCartStore((state) => state.cartItems);

  const navItems = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "About Us",
      to: "/about",
    },
    {
      title: "Contact",
      to: "/contact",
    },
  ];

  return (
    <Box>
      <Box maxW="1400px" m="0 auto">
        <Box
          p="20px 10px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection={isSmallerThan790 ? "column" : "row"}
        >
          <Heading size="lg" fontFamily="Dancing Script">
            <a href="/">CH-Ecommerce</a>
          </Heading>
          <Box
            display="flex"
            alignItems="center"
            pt={isSmallerThan790 ? "10px" : "0px"}
            w={isSmallerThan790 ? "-webkit-fill-available" : "auto"}
            justifyContent="space-between"
            px={isSmallerThan790 ? "10px" : "auto"}
          >
            {isSmallerThan560 ? (
              <HamburgerMenu />
            ) : (
              <Box display="flex" justifyContent="center">
                {navItems.map((item, index) => (
                  <Box key={index} mx="10px" textAlign="center">
                    <Link href={item.to}>{item.title}</Link>
                  </Box>
                ))}
              </Box>
            )}
            <Box display="flex" alignItems="center" ml="10px">
              <Box ml="10px">
                <Link href="/addtocart" display="flex">
                  <CiShoppingCart fontSize="x-large" />

                  <Box ml="5px" fontSize="sm" color="red">
                    {cartItems.length}
                  </Box>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
