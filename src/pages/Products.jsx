import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Products = () => {
  return (
    <Box>
      <Box p={4}>
        <Text fontSize="xl" mb={6}>
          Our Sneaker Collection
        </Text>
        {["Sneaker Model 1", "Sneaker Model 2", "Sneaker Model 3"].map((sneaker, index) => (
          <Box key={index} mb={4}>
            <Text fontWeight="bold">{sneaker}</Text>
            <Text>Price: ${79.99 + index * 10}.00</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Products;
