import {
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Button,
  DrawerCloseButton,
  Link,
  Box,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
const HamburgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        colorScheme="teal"
        onClick={onOpen}
        color="primary.htext"
        bg="primary.header"
        size="sm"
      >
        <AiOutlineMenu />
      </Button>
      <Box bg="primary.mainbg">
        <Drawer onClose={onClose} isOpen={isOpen} size="xs" placement="left">
          <DrawerOverlay />
          <DrawerContent
            p="40px 40px 10px 30px "
            bg="primary.mainbg"
            color="primary.htext"
          >
            <DrawerCloseButton color="primary.htext" size="xs" />
            <Link href="/">Home</Link> <hr />
            <Link href="/about">About us</Link> <hr />
            <Link href="/contact">Contact</Link> <hr />
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};

export default HamburgerMenu;
