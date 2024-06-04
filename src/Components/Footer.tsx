import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Box bg="primary.header" color="primary.htext">
        <Box maxW="1200px" m="0 auto" p="15px">
          <Text textAlign="center">All right reserved to Code Himalaya !</Text>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
