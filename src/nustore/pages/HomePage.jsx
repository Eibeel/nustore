import React from "react";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { NavBar, GridCategories, Footer, ProductCard } from '../components'
import { useSelector } from "react-redux";
import { BannerCarousel } from "../components/Carousel";

export const HomePage = () => {

    const { products } = useSelector(state => state.nustore);

    return (
        <Box overflowX="hidden" h="100vh" display="flex" flexDir="column" justifyContent="space-between">
            <Box>
                <NavBar />
                <BannerCarousel />
                <Flex
                    flexDirection="column"
                    alignItems="center"
                    overflowX="hidden"
                >
                    {
                        products.length === 0
                            ? ""
                            :
                            <Flex
                                flexDir="column"
                                m="32px 16px 24px"
                                w={{ base: "22rem", md: "44.5rem" }}
                            >
                                <Text
                                    fontSize={{ base: "16px", md: "18px" }}
                                    fontWeight="semibold"
                                >
                                    Tal vez te pueda interesar
                                </Text>
                                <Text
                                    fontSize="14px"
                                    fontWeight="regular"
                                    color="brand.20"
                                >
                                    Basada en tu última búsqueda...
                                </Text>
                            </Flex>
                    }
                    <VStack spacing={4} mx="auto">
                        <ProductCard />
                    </VStack>
                    <Box
                        w={{ base: "22rem", md: "md", lg: "44.5rem" }}
                        m="28px auto 18px"
                    >
                        <Text
                            fontWeight="semibold"
                        >
                            Categorias populares
                        </Text>
                        <Text
                            fontSize="14px"
                            fontWeight="regular"
                            color="brand.20"
                        >
                            Lo que mas buscan los usuarios
                        </Text>
                    </Box>
                    <GridCategories />
                </Flex>
            </Box>
            <Footer />
        </Box>
    );
};
