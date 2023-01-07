import { Flex, Text, VStack } from "@chakra-ui/react"
import { NavBar } from "../components/navBar/NavBar"
import { ProductCard } from "../components/productCard/ProductCard"

export const SelectedCategoryPage = () => {
    return (
        <Flex flexDirection="column" alignItems="center">

            <NavBar />
            <Text fontWeight="semibold" w={{ base: "22rem", md: "44.5rem" }} m="20px auto 24px">
                Categoria seleccionada
            </Text>

            <VStack spacing={4}>
                <ProductCard />
                <ProductCard />
            </VStack>


        </Flex>
    )
}