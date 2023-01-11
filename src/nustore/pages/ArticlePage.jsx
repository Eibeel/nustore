import { Box, Image, Flex } from "@chakra-ui/react"
import { ItemInformation, NavBar } from "../components"

export const ArticlePage = () => {
    return (
        <Flex flexDir="column" h="100vh" alignItems="center">

            <NavBar />

            <Box>
                <Image
                    src="https://placeimg.com/400/320/any"
                    objectFit="cover"
                    htmlWidth={{ base: "100vw", md: "332px" }}
                    htmlHeight={{ base: "320px", md: "332px" }}
                />
            </Box>

            <ItemInformation />

        </Flex>
    )
}
