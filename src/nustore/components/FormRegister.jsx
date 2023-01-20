import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link as ReactLink } from 'react-router-dom'
import { Controller, useForm } from "react-hook-form";
import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement, Link, Text } from "@chakra-ui/react"
import { FormCard } from "./"
import { startRegister } from "../../store/auth";

export const FormRegister = () => {

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const { control, handleSubmit, formState: { errors, isSubmitting } }
        = useForm({
            defaultValues: { displayName: "", email: "", password: "" },
            mode: "onChange"
        });

    const dispatch = useDispatch();

    const onSubmit = ({ email, password, displayName }) => {
        return new Promise(resolve => {
            setTimeout(() => {
                dispatch(startRegister({ email, password, displayName }))
                resolve();
            }, 1000);
        })
    }

    return (
        <FormCard>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isRequired>
                    <Flex flexDir="column">

                        {/* name */}
                        <FormLabel
                            textAlign="start"
                        >
                            Nombre o apodo
                        </FormLabel>
                        <Controller
                            control={control}
                            name="displayName"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Por favor, ingrese su nombre."
                                },
                                minLength: {
                                    value: 3,
                                    message: "Ingresa un nombre de minimo 3 caracteres."
                                },
                                maxLength: {
                                    value: 12,
                                    message: "Ingrese un nombre menor a 12 caracteres."
                                }
                            }}
                            render={({
                                field: { value, onChange },
                            }) => (
                                <Input
                                    type="text"
                                    aria-required="true"
                                    id="displayName"
                                    autoComplete="off"
                                    onChange={onChange}
                                    value={value}
                                />
                            )}
                        />
                        <FormErrorMessage>
                            {errors.displayName && errors.displayName.message}
                        </FormErrorMessage>

                        {/* email */}
                        <FormLabel
                            textAlign="start"
                            mt="1rem"
                        >
                            Dirección de correo electronico
                        </FormLabel>
                        <Controller
                            control={control}
                            name="email"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Por favor, ingrese su correo."
                                },
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Ingresa un correo válido",
                                }
                            }}
                            render={({
                                field: { value, onChange }
                            }) => (
                                <Input
                                    type="email"
                                    aria-required="true"
                                    id="email"
                                    autoComplete="off"
                                    value={value}
                                    onChange={onChange}
                                />
                            )}
                        />
                        <FormErrorMessage>
                            {errors.email && errors.email.message}
                        </FormErrorMessage>

                        {/* password */}
                        <FormLabel
                            textAlign="start"
                            mt="1rem"
                        >
                            Contraseña
                        </FormLabel>

                        <Controller
                            control={control}
                            name="password"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Por favor, ingrese su contraseña.",
                                },
                            }}
                            render={({
                                field: { value, onChange }
                            }) => (
                                <InputGroup>
                                    <Input
                                        type={show ? "text" : "password"}
                                        aria-required="true"
                                        id="password"
                                        mb="4rem"
                                        value={value}
                                        onChange={onChange}
                                    />
                                    <InputRightElement width='4.5rem'>
                                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                                            {show ? 'Hide' : 'Show'}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            )}
                        />

                        <Button
                            type="submit"
                            bg="brand.30"
                            color="brand.0"
                            fontWeight="semibold"
                            _hover={{ bg: "#E54335" }}
                            w={{ base: "10rem" }}
                            m="auto"
                            isLoading={isSubmitting}
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
                            to="/login"
                        >
                            Ingresar
                        </Link>
                    </Flex>
                </FormControl>
            </form>
        </FormCard>
    )
}
