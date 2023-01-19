import { useState } from "react";
import { Link as ReactLink } from 'react-router-dom'
import { Button, Flex, FormControl, FormLabel, Input, InputGroup, InputRightElement, Link, Text } from "@chakra-ui/react"
import { FormCard } from "./"

export const FormRegister = () => {

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
        <FormCard>

            <FormControl isRequired>
                <Flex flexDir="column">
                    <FormLabel
                        textAlign="start"
                    >
                        Nombre o apodo
                    </FormLabel>
                    <Input
                        type="text"
                        aria-required="true"
                        id="name"
                        mb="1rem"
                        autoComplete="off"
                    />
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
                    <InputGroup>
                        <Input
                            type={show ? "text" : "password"}
                            aria-required="true"
                            id="password"
                            mb="4rem"
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Button
                        type="submit"
                        bg="brand.30"
                        color="brand.0"
                        fontWeight="semibold"
                        _hover={{ bg: "#E54335" }}
                        w={{ base: "10rem" }}
                        m="auto"
                    >
                        Registrarse
                    </Button>
                    <Text
                        m="1.5rem auto auto"
                        fontWeight="light"
                        fontSize="14px"
                    >
                        ¿Ya tienes una cuenta?
                    </Text>
                    <Link
                        as={ReactLink}
                        color="brand.40"
                        fontSize="14px"
                        fontWeight="bold"
                        m="auto"
                        to="/auth/login"
                    >
                        Ingresar
                    </Link>
                </Flex>
            </FormControl>

        </FormCard>
    )
}
