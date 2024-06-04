import { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardBody,
  SimpleGrid,
  Text,
  Image,
  Heading,
  CardFooter,
  ButtonGroup,
  Button,
  Link,
} from "@chakra-ui/react";

import { useNavigate, useParams } from "react-router-dom";
import useCartStore from "../Store/useCartStore";

const CommonLayout = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addToCart);
  const { name } = useParams();
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/category/${name}`
        );
        console.log(response);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [name]);

  return (
    <>
      <Box
        bg="primary.mainbg"
        color="primary.htext"
        minH="100vh"
        display="grid"
        gridTemplateRows="1fr auto"
      >
        <Box maxW="1200px" m="0 auto" px="10px" py="30px">
          <Text as="u" textTransform="capitalize" fontSize="20px">
            {name}
          </Text>
          <Box pt="20px" pb="20px">
            <SimpleGrid columns={[1, 2, 3, 4]} spacing="15px">
              {products.map((product) => (
                <Card key={product.id} maxW="sm">
                  <CardBody p="0px">
                    <Image
                      src={product.thumbnail}
                      h="200px"
                      w="100%"
                      cursor="pointer"
                      onClick={() => navigate(`/products/${product.id}`)}
                      objectFit="cover"
                      loading="lazy"
                    />
                    <Box
                      p="10px"
                      onClick={() => navigate(`/products/${product.id}`)}
                    >
                      <Heading size="sm" pt="5px" cursor="pointer">
                        {product.title}
                      </Heading>
                      <Text color="blue.600" fontSize="xl">
                        Rs. {product.price}
                      </Text>
                    </Box>
                  </CardBody>

                  <CardFooter p="0px 5px 10px 10px ">
                    <ButtonGroup spacing="2" pt="0px" mt="0px" size="sm">
                      <Button
                        variant="solid"
                        colorScheme="blue"
                        onClick={() => navigate("/paymentsuccessful")}
                      >
                        Buy now
                      </Button>
                      <Button
                        variant="ghost"
                        bg="green"
                        color="primary.htext"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to cart
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              ))}
            </SimpleGrid>
            <Box pt="10px">
              <Link href="/">
                <Button>Back to Product List</Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CommonLayout;
