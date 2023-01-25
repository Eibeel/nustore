import { Box, HStack, IconButton, Square, Text, VStack } from "@chakra-ui/react"
import { NavArrowLeft, NavArrowRight } from "iconoir-react"
import { useDispatch, useSelector } from "react-redux"
import { setItems } from "../../store/nustore"
import { Footer, NavBar, ProductCard } from "../components"

export const SelectedCategoryPage = () => {

    const dispatch = useDispatch();
    const { page, category_id } = useSelector(state => state.nustore);

    const handleNextPage = () => {
        dispatch(setItems(page, category_id))
    }

    const handlePrevPage = () => {
        if (page === 0) {
            dispatch(setItems(page, category_id))
        }
        dispatch(setItems(page - 2, category_id))
    }

    return (
        <VStack justifyContent="space-between" height="100vh" overflowX="hidden">

            <Box height="auto" display="flex" flexDirection="column" alignItems="center">
                <NavBar />
                <Text fontWeight="semibold" w={{ base: "22rem", md: "44.5rem" }} m="20px auto 24px">
                    Categoria seleccionada
                </Text>
                <VStack spacing={4} mb="2rem" w="fit-content">
                    <ProductCard />
                </VStack>
                <HStack spacing="1rem" w="fit-content" mb="1rem">
                    <IconButton icon={<NavArrowLeft />} onClick={handlePrevPage} />
                    <Square size='40px'>{page}</Square>
                    <IconButton icon={<NavArrowRight />} onClick={handleNextPage} />
                </HStack>
            </Box>
            <Footer />
        </VStack>
    )
}