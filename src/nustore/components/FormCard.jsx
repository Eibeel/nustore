import { Box, Flex } from "@chakra-ui/react"
import GoogleButton from "react-google-button"
import { useDispatch } from "react-redux"
import { startGoogle } from "../../store/auth/thunks"


export const FormCard = ({ children }) => {

    const dispatch = useDispatch();

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
                    onClick={() => dispatch(startGoogle())}
                />
            </Flex>

            {children}

        </Box>
    )
}
