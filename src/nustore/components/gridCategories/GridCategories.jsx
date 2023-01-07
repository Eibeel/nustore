import React from 'react'
import { Box, Link, SimpleGrid } from '@chakra-ui/react'

export const GridCategories = () => {
    return (
        <Box w={{ base: "22rem", md: "md", lg: "44.5rem" }}>
            <SimpleGrid columns={2} spacing="1rem">
                <Link w="auto" h="48px" border="solid 1px #EDEDED" fontSize="13px" p="1rem" textAlign="center">Audio</Link>
                <Link w="auto" h="48px" border="solid 1px #EDEDED" fontSize="13px" p="1rem" textAlign="center">Portatil</Link>
                <Link w="auto" h="48px" border="solid 1px #EDEDED" fontSize="13px" p="1rem" textAlign="center">Celulares</Link>
                <Link w="auto" h="48px" border="solid 1px #EDEDED" fontSize="13px" p="1rem" textAlign="center">Ropa</Link>
            </SimpleGrid>
        </Box>
    )
}
