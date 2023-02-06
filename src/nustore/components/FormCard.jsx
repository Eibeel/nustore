import { Box, Flex } from "@chakra-ui/react"
import { motion } from "framer-motion"
import GoogleButton from "react-google-button"
import { useDispatch } from "react-redux"
import { startGoogle } from "../../store/auth/thunks"


export const FormCard = ({ children }) => {

    const dispatch = useDispatch();

    return (
        <Box
            as={motion.div}
            bg="brand.0"
            border="solid 1px #EDEDED"
            w={{ base: "22rem", md: "26rem" }}
            p="3rem 1.5rem 2rem"
            m="-4rem auto"
            h="auto"
            initial={{ opacity: 0, scale: .90 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 5,
                ease: "ease-in",
                times: [0, 1]
            }}
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
