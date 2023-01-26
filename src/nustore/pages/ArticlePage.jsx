import { Flex } from "@chakra-ui/react"
import { ItemInformation, NavBar } from "../components"

export const ArticlePage = () => {
    return (
        <Flex flexDir="column" h="100vh" alignItems="center">
            <NavBar />
            <ItemInformation />
        </Flex>
    )
}
