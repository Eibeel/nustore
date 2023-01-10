import { Box, Text, VStack } from "@chakra-ui/react"
import { Footer, NavBar, ProductCard } from "../components"

export const SelectedCategoryPage = () => {
    return (
        <VStack justifyContent="space-between" height="100vh">

            <Box height="auto" display="flex" flexDirection="column" alignItems="center">
                <NavBar />
                <Text fontWeight="semibold" w={{ base: "22rem", md: "44.5rem" }} m="20px auto 24px">
                    Categoria seleccionada
                </Text>
                <VStack spacing={4} mb="4rem">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </VStack>
            </Box>
            <Footer />
        </VStack>
    )
} 