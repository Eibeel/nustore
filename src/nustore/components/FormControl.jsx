import { Box, Button, Flex, FormControl as FormControlAuth, FormLabel, Input, Link, Text } from "@chakra-ui/react"
import GoogleButton from "react-google-button"
import { Link as ReactLink } from 'react-router-dom'

export const FormControl = ({ BtnLabel, LinkAuth, LinkLabel, TextLabel }) => {
    return (
        <Box
            bg="brand.0"
            border="solid 1px #EDEDED"
            w={{ base: "22rem", md: "26rem" }}
            p="3rem 1.5rem 2rem"
            m="-4rem auto"
            h="auto"
        >

            <Flex justifyContent="center" mb="3rem">
                <GoogleButton 
                    type="light"
                    label="Continuar con Google"
                />
            </Flex>

            <FormControlAuth isRequired>
                <Flex flexDir="column">
                    <FormLabel
                        textAlign="start"
                    >
                        Dirección de correo electronico
                    </FormLabel>
                    <Input
                        type="email"
                        aria-required="true"
                        id="email"
                        mb="1rem"
                        autoComplete="off"
                    />
                    <FormLabel
                        textAlign="start"
                    >
                        Contraseña
                    </FormLabel>
                    <Input
                        type="password"
                        aria-required="true"
                        id="password"
                        mb="4rem"
                    />
                    <Button
                        bg="brand.30"
                        color="brand.0"
                        fontWeight="semibold"
                        _hover={{ bg: "#E54335" }}
                        w={{ base: "10rem" }}
                        m="auto"
                    >
                        {BtnLabel}
                    </Button>
                    <Text
                        m="1.5rem auto auto"
                        fontWeight="light"
                        fontSize="14px"
                    >
                        {TextLabel}
                    </Text>
                    <Link
                        as={ReactLink}
                        color="brand.40"
                        fontSize="14px"
                        fontWeight="bold"
                        m="auto"
                        to={LinkAuth}
                    >
                        {LinkLabel}
                    </Link>
                </Flex>
            </FormControlAuth>
        </Box>
    )
}
