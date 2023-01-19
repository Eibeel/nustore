import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link as ReactLink } from 'react-router-dom'
import { Controller, useForm } from "react-hook-form";
import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement, Link, Text } from "@chakra-ui/react"
import { FormCard } from "./"
import { startLogin } from "../../store/auth/thunks";

export const FormLogin = () => {

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const { handleSubmit, control, formState: { errors, isSubmitting } } = useForm({ defaultValues: { email: "", password: "" }, mode: "onChange" });
    const dispatch = useDispatch();

    const onSubmit = ({email, password}) => {
        return new Promise(resolve => {
            setTimeout(() => {
                dispatch(startLogin({email, password}))
                resolve();
            }, 1000);
        })
    }

    return (
        <FormCard>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isRequired isInvalid={errors.email}>
                    <Flex flexDir="column">
                        <FormLabel
                            textAlign="start"
                        >
                            Dirección de correo electronico
                        </FormLabel>
                        <Controller
                            control={control}
                            name="email"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Campo obligatorio.",
                                },
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Ingresa un correo válido."
                                }
                            }}
                            render={({ field: { value, onChange } }) => (
                                <Input
                                    aria-required="true"
                                    id="email"
                                    autoComplete="off"
                                    value={value}
                                    onChange={onChange}
                                />
                            )}
                        />
                        <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                        <FormLabel
                            textAlign="start"
                            mt="1rem"
                        >
                            Contraseña
                        </FormLabel>

                        {/* password */}
                        <Controller
                            control={control}
                            name="password"
                            rules={{
                                required: {
                                    value: true,
                                    message: 'Este campo es obligatorio.'
                                },
                            }}
                            render={({ field: { value, onChange } }) => (
                                <InputGroup>
                                    <Input
                                        type={show ? "text" : "password"}
                                        aria-required="true"
                                        id="password"
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
                        <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>

                        <Button
                            type="submit"
                            bg="brand.30"
                            color="brand.0"
                            fontWeight="semibold"
                            _hover={{ bg: "#E54335" }}
                            w={{ base: "10rem" }}
                            m="auto"
                            mt="4rem"
                            isLoading={isSubmitting}
                        >
                            Ingresar
                        </Button>
                        <Text
                            m="1.5rem auto auto"
                            fontWeight="light"
                            fontSize="14px"
                        >
                            ¿Aún no tienes cuenta?
                        </Text>
                        <Link
                            as={ReactLink}
                            color="brand.40"
                            fontSize="14px"
                            fontWeight="bold"
                            m="auto"
                            to="/auth/register"
                        >
                            Registrate :)
                        </Link>
                    </Flex>
                </FormControl>
            </form>
        </FormCard>
    )
}
