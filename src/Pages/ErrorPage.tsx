import { Box, Heading } from "@chakra-ui/react";

const ErrorPage = () => {
  return (
    <>
      <Box
        maxW="1200px"
        m="0 auto"
        textAlign="center"
        display="grid"
        height="100vh"
        alignContent="center"
      >
        <Heading>404 Page not found</Heading>
      </Box>
    </>
  );
};

export default ErrorPage;
