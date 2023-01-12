import { Flex, Heading } from "@chakra-ui/react"
import { Link as LinkReact } from "react-router-dom"
import { FormControl } from "../../nustore/components"

export const RegisterPage = () => {
  return (
    <div>

      <Flex
        bg="brand.30"
        w="100vw"
        h="224px"
        color="brand.0"
        padding="48px"
        flexDir="column"
        alignItems="center"
        rowGap="24px"
        overflow="hidden"
      >
        <Heading
          fontSize={{ base: "32px", md: "32px" }}
          fontWeight="700"
          as={LinkReact} to="/home">
          nustore
        </Heading>
      </Flex>

      <FormControl
        BtnLabel="Registrarse"
        LinkAuth="/auth/login"
        LinkLabel="Ingresar"
        TextLabel="¿Ya tienes una cuenta?"
      />

    </div>
  )
}
