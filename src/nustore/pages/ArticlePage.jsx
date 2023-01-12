import { Box, Image, Flex } from "@chakra-ui/react"
import { ItemInformation, NavBar } from "../components"
import ImageExample from '../../assets/images/examples.jpg'

export const ArticlePage = () => {
    return (
        <Flex flexDir="column" h="100vh" alignItems="center">

            <NavBar />

            <Box>
                <Image
                    src={ImageExample}
                    objectFit="cover"
                    height={{ base: "20rem", md: "22rem" }}
                    width={{ base: "100vw", md: "24rem" }}
                    />
            </Box>

            <ItemInformation />

        </Flex>
    )
}
