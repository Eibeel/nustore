import { Box, IconButton, Text, HStack, Link } from '@chakra-ui/react'
import { GitHub } from 'iconoir-react'
import React from 'react'

export const Footer = () => {
    return (
        <div>
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
                    w={{ base: '100%', md: '44.5rem' }}
                >
                    <Text
                        color="brand.0"
                        fontWeight="bold"
                        fontFamily="PT Sans"
                        fontSize="24px"
                    >
                        Nustore
                    </Text>

                    <Link href='https://github.com/Eibeel' target="_blank">
                        <IconButton icon={<GitHub />} borderRadius="100%" variant="link" />
                    </Link>
                </HStack>
            </Box>
        </div>
    )
}
