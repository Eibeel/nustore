import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { NavBar } from "../components/navBar/NavBar";
import { ProductCard } from "../components/productCard/ProductCard";

export const HomePage = () => {

    return (
        <Flex flexDirection="column" alignItems="center">
            <NavBar />

            <Flex flexDir="column" mt="24px" mx="16px" w={{ base: "22rem", md: "812px" }}>
                <Text fontSize={{ base: "16px", md: "18px" }} fontWeight="semibold"> Tal vez te pueda interesar </Text>
                <Text fontSize="14px" fontWeight="regular" color="brand.20"> Explora entre miles de productos </Text>
            </Flex>

            <Box display="flex" flexDir="column" rowGap={4} m="24px auto">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Box>

            <Text fontSize="14px" fontFamily="medium">
                Ver más...
            </Text>
        </Flex>
    )
}
