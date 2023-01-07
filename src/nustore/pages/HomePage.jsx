import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import { NavBar } from "../components/navBar/NavBar";
import { ProductCard } from "../components/productCard/ProductCard";
import { GridCategories } from "../components/gridCategories/GridCategories";
import { Footer } from "../components/footer/Footer";

export const HomePage = () => {

    return (
        <Flex flexDirection="column" alignItems="center" overflowX="hidden">
            <NavBar />

            <Flex flexDir="column" mt="32px" mx="16px" w={{ base: "22rem", md: "44.5rem" }}>
                <Text fontSize={{ base: "16px", md: "18px" }} fontWeight="semibold"> Tal vez te pueda interesar </Text>
                <Text fontSize="14px" fontWeight="regular" color="brand.20"> Explora entre miles de productos </Text>
            </Flex>

            <VStack spacing={4} m="24px auto">
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </VStack>

            <Link fontSize="14px" fontWeight="medium" color="brand.20" as={ReactLink} to="/categoria_seleccionada">
                Ver más...
            </Link>

            <Box w={{ base: "22rem", md: "md", lg: "44.5rem" }} m="28px auto 18px">
                <Text fontWeight="semibold">Categorias populares</Text>
                <Text fontSize="14px" fontWeight="regular" color="brand.20">
                    Lo que mas buscan los usuarios
                </Text>
            </Box>

            <GridCategories />
            <Footer />

        </Flex>
    )
}
