import {
  Box,
  Text,
  Image,
  Heading,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useCartStore from "../Store/useCartStore";
import useCountStore from "../Store/useCountStore";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { count, inc, desc } = useCountStore();
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (product) => {
    addToCart(product, count);
  };

  const [isSmallerThan680] = useMediaQuery("(max-width: 680px)");

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [productId]);

  const discountAmount = (product) => {
    return (product.price * product.discountPercentage) / 100;
  };

  const totalPrice = (product) => {
    const discountedPrice = product.price - discountAmount(product);
    return discountedPrice.toFixed(2);
  };

  return (
    <>
      <Box
        bg="primary.mainbg"
        color="primary.htext"
        minH="100vh"
        display="grid"
        gridTemplateRows="1fr auto"
      >
        <Box maxW="1200px" m="0 auto">
          {product && (
            <Box
              px="20px"
              py="20px"
              display="flex"
              flexDirection={isSmallerThan680 ? "column" : "row"}
              gap="15px"
            >
              <Box>
                <Image
                  src={product.thumbnail}
                  h="450px"
                  w="auto"
                  loading="lazy"
                />
              </Box>
              <Box p="20px 10px 20px 30px">
                <Heading>{product.title}</Heading>
                <Text fontSize="16px" pt="10px">
                  {product.description}
                </Text>

                <Box pt="10px">
                  <Text>In Stock: {product.stock}</Text>
                </Box>
                <Box>
                  <Text fontSize="20px" pt="10px" color="primary.price" as="s">
                    Rs.{""} {product.price}
                  </Text>
                  <Text fontSize="20px" pt="2px" color="primary.price">
                    Rs.{""} {totalPrice(product)}
                  </Text>
                </Box>
                <Text fontSize="20px" pt="10px" color="primary.price"></Text>
                <Box display="flex" gap="10px" pt="10px">
                  <Button onClick={desc} size="sm">
                    -
                  </Button>
                  <Text fontSize="20px">{count}</Text>
                  <Button onClick={inc} size="sm">
                    +
                  </Button>
                </Box>

                <Box pt="15px" display="flex" gap="15px">
                  <Button onClick={() => navigate("/paymentsuccessful")}>
                    Buy Now
                  </Button>
                  <Button
                    variant="ghost"
                    bg="green"
                    color="primary.htext"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to cart
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Product;
