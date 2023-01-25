import { Card, Skeleton, SkeletonText } from "@chakra-ui/react"


export const SkeletonCard = () => {
    return (
        <Card
            align="center"
            borderRadius="none"
            direction="row"
            h="auto"
            p="12px"
            variant="outline"
            w={['22rem', 'md', '44.5rem']}
        >
            <Skeleton w="104px" h="96px" mr="1rem" />
            <SkeletonText noOfLines={2} skeletonHeight="4" spacing="4" w="100%" />
        </Card>
    )
}
