import { Box, Image, Stack, Text, VStack } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { Footer } from "./Footer"
import { ItemTableInformation } from "./ItemTableInformation"

export const ItemInformation = () => {

    const { product_id, products, description } = useSelector(state => state.nustore);
    const options = { style: 'currency', currency: 'COP' };

    let productInfo = {};

    products.map(pid => {
        if (pid.id === product_id) {
            productInfo = { ...pid }
            return productInfo
        }
        return productInfo
    })

    return (
        <Box>
            <VStack spacing="2rem">
                <Image
                    src={productInfo.thumbnail?.replace("-I", "-C")}
                    objectFit="contain"
                    height={{ base: "20rem", md: "22rem" }}
                    width={{ base: "100vw", md: "24rem" }}
                />
                <Stack
                    w={{ base: "22rem", md: "44.5rem" }}
                    border="solid 1px #EDEDED"
                    padding="8px 16px"
                    m="1.5rem auto 0"
                >
                    <Text fontWeight="light">
                        {productInfo.title}
                    </Text>
                    <Text fontWeight="bold" textAlign="right" color="#e63946">
                        {new Intl.NumberFormat('es-CO', options).format(productInfo.price)} {productInfo.currency_id}
                    </Text>
                </Stack>

                <Stack
                    w={{ base: "22rem", md: "44.5rem" }}
                    border="solid 1px #EDEDED"
                    padding="8px 16px"
                >
                    <Text fontWeight="bold">
                        Descripción
                    </Text>
                    <Text fontWeight="light">
                        {description}
                    </Text>
                </Stack>
                <ItemTableInformation />
            </VStack>
            <Footer />
        </Box>
    )
}
