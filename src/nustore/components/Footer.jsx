import { Box, IconButton, Text, HStack } from '@chakra-ui/react'
import { GitHub } from 'iconoir-react'
import React from 'react'

export const Footer = () => {
    return (
        <Box
            bg="brand.30"
            display="flex"
            justifyContent="center"
            mt="4rem"
            h="112px"
            p="24px"
            w="100vw"
        >
            <HStack
                display="flex"
                justifyContent="space-between"
                w={{ base: '100%', md: '44.5rem'}}
                >
                <Text
                    color="brand.0"
                    fontWeight="bold"
                    fontFamily="PT Sans"
                    fontSize="24px"
                >
                    Nustore
                </Text>

                <IconButton icon={<GitHub />} borderRadius="100%" variant="link"/>
            </HStack>
        </Box>
    )
}
