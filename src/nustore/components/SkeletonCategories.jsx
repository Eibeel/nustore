import { Box, Skeleton, Stack } from "@chakra-ui/react"

export const SkeletonCategories = () => {
    return (
        <Box alignSelf="start" w="90%">
            <Stack spacing="20px">
                <Skeleton h="16px" fadeDuration={1} />
                <Skeleton h="16px" fadeDuration={1} />
                <Skeleton h="16px" fadeDuration={1} />
                <Skeleton h="16px" fadeDuration={1} />
                <Skeleton h="16px" fadeDuration={1} />
                <Skeleton h="16px" fadeDuration={1} />
                <Skeleton h="16px" fadeDuration={1} />
                <Skeleton h="16px" fadeDuration={1} />
                <Skeleton h="16px" fadeDuration={1} />
                <Skeleton h="16px" fadeDuration={1} />
            </Stack>
        </Box>
    )
}