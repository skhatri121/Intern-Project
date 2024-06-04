import { Box, Text, Icon } from "@chakra-ui/react";
import { CiDeliveryTruck } from "react-icons/ci";

const Header = () => {
  return (
    <>
      <Box bg="primary.header">
        <Box maxW="1200px" m="0 auto">
          <Box p="10px">
            <Text color="primary.htext" textAlign="center" fontSize="16px">
              Summer Sale for All Swim Suits and Free Delivery !{" "}
              <Icon fontSize="24px">
                <CiDeliveryTruck />
              </Icon>
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
