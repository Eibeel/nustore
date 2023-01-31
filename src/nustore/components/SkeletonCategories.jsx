import { Box, Skeleton, Stack, Text } from "@chakra-ui/react"

export const SkeletonCategories = () => {

    const funcion = () => {
        for (let index = 0; index === 16; index++) {
            console.log(index);
        }
    }

    funcion()

    return (
        <Box alignSelf="start" w="90%">
            <Stack spacing="20px">
                <Skeleton h="16px" fadeDuration={1} />
                <Text> {funcion()} </Text>
            </Stack>
        </Box>
    )
}