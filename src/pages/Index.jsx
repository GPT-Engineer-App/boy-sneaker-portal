import { Box, Container, Flex, Heading, Text, Button, SimpleGrid, Image, Stack, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaShoppingCart, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Container maxW={"7xl"}>
        {/* Header */}
        <Flex as="header" align="center" justify="space-between" wrap="wrap" padding={6} bg={useColorModeValue("gray.100", "gray.900")}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            The Boy Sneakers
          </Heading>
          <Stack direction={"row"} spacing={6}>
            <Icon as={FaInstagram} w={6} h={6} />
            <Icon as={FaFacebook} w={6} h={6} />
            <Icon as={FaTwitter} w={6} h={6} />
          </Stack>
        </Flex>

        {/* Hero Section */}
        <Flex align="center" justify="center" paddingY={12}>
          <Stack textAlign={"center"} spacing={4}>
            <Heading>Discover Your Perfect Sneakers</Heading>
            <Text fontSize={"lg"}>Explore our exclusive collection and find the pair that fits you best.</Text>
            <Button
              colorScheme={"blue"}
              bg={"blue.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "blue.500",
              }}
            >
              Shop Now
            </Button>
          </Stack>
        </Flex>

        {/* Featured Products */}
        <Box paddingY={10}>
          <Heading as="h2" size="xl" textAlign={"center"} marginBottom={10}>
            Featured Products
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {Array.from({ length: 3 }).map((_, index) => (
              <Box key={index} maxW={"sm"} borderWidth="1px" rounded="lg" overflow="hidden">
                <Image src={`https://images.unsplash.com/photo-1667709525632-ca0ce065951d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMCUyNCU3QmluZGV4JTIwJTJCJTIwMSU3RHxlbnwwfHx8fDE3MTAzMjc0OTd8MA&ixlib=rb-4.0.3&q=80&w=1080`} alt={`Sneakers ${index + 1}`} />
                <Box p={6}>
                  <Box d="flex" alignItems="baseline">
                    {index === 0 ? (
                      <Box color="red.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
                        New
                      </Box>
                    ) : null}
                  </Box>
                  <Flex mt="1" justifyContent="space-between" alignContent="center">
                    <Box fontSize="lg" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                      Sneaker Model {index + 1}
                    </Box>
                    <Box>
                      <Box as="span" color={"gray.600"} fontSize="sm">
                        $89.99
                      </Box>
                    </Box>
                  </Flex>
                  <Flex justifyContent="center" alignContent="center" marginTop={2}>
                    <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="outline" size="sm">
                      Add to Cart
                    </Button>
                  </Flex>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Footer */}
        <Flex as="footer" align="center" justify="center" wrap="wrap" padding={6} bg={useColorModeValue("gray.200", "gray.800")} mt={10}>
          <Text fontSize={"sm"}>&copy; {new Date().getFullYear()} The Boy Sneakers. All rights reserved.</Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Index;
