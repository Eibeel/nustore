import { Box, Stack, Text, VStack } from "@chakra-ui/react"
import { Footer } from "./Footer"
import { ItemTableInformation } from "./ItemTableInformation"


export const ItemInformation = () => {
    return (
        <Box>
            <VStack spacing="2rem">
                <Stack
                    w={{ base: "22rem", md: "44.5rem" }}
                    border="solid 1px #EDEDED"
                    padding="8px 16px"
                    m="1.5rem auto 0"
                >
                    <Text fontWeight="light">
                        New Macbook Air M2, 8GB RAM, SSD 256GB, TurboPower 55W
                    </Text>
                    <Text fontWeight="bold">
                        $ 5.250.000
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse neque vitae veniam nobis tenetur accusamus, nesciunt est,
                        consequuntur aspernatur eveniet aperiam aliquid nam fugit perferendis
                        perspiciatis omnis quia expedita modi!
                    </Text>
                </Stack>
                <ItemTableInformation />
            </VStack>
            <Footer />
        </Box>
    )
}
