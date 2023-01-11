import { Box, Text, VStack } from "@chakra-ui/react"
import { NavBar, ProductCard } from "../components"

export const ShoppingPage = () => {
    return (
        <div>

            <NavBar />

            <Box height="auto" display="flex" flexDirection="column" alignItems="center">
                <Text fontWeight="semibold" w={{ base: "22rem", md: "44.5rem" }} m="20px auto 24px">
                    #number articulos
                </Text>

                <VStack spacing={4} mb="4rem">
                    <ProductCard />
                </VStack>
            </Box>
        </div>
    )
}