import {
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Link,
  Text,
} from "@chakra-ui/react";
import { HiCheckCircle } from "react-icons/hi2";

const PaymentSuccessful = () => {
  return (
    <>
      <Box
        bg="primary.mainbg"
        minH="100vh"
        display="grid"
        gridTemplateRows="1fr auto"
      >
        <Box maxW="1200px" m="0 auto" color="primary.htext" textAlign="center">
          <Box display="flex" justifyContent="center" p="50px">
            <Card maxW="sm">
              <CardBody
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
                p="80px"
              >
                <HiCheckCircle color="green" fontSize="50px" />
                <Text>Success</Text>
              </CardBody>
              <Divider />
              <Box bg="green" color="primary.htext" p="50px">
                <Text>
                  Congratulations! Your payment has been received successfully.
                </Text>
              </Box>
            </Card>
          </Box>
          <Box pb="20px">
            <Link href="/">
              <Button>Back to Home Page</Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PaymentSuccessful;
