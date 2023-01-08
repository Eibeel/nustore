import { Flex, Text, VStack } from "@chakra-ui/react"
import { NavBar, ProductCard } from "../components"

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