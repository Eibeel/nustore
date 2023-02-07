import { Box, HStack, IconButton, Spinner, Square, Text, VStack } from "@chakra-ui/react"
import { NavArrowLeft, NavArrowRight } from "iconoir-react"
import { useDispatch, useSelector } from "react-redux"
import { setItems } from "../../store/nustore"
import { Footer, NavBar, ProductCard } from "../components"

export const SelectedCategoryPage = () => {

    const dispatch = useDispatch();
    const { page, category_id, categories, query, isLoading, products } = useSelector(state => state.nustore);

    const handleNextPage = () => {
        dispatch(setItems(page, category_id, query))
    }

    const handlePrevPage = () => {
        if (page === 1) return
        dispatch(setItems(page - 2, category_id, query))
    }

    let obj = {};

    categories.map(c => {
        if (c.id === category_id) {
            obj = { ...c }
            return obj
        }
        return obj
    })

    return (
        <VStack justifyContent="space-between" height="100vh" overflowX="hidden">
            <NavBar />
            <Box height="auto" display="flex" flexDirection="column">
                {
                    products.length === 0 && category_id === "void"
                        ?
                        <Text>Lo sentimos, no hay artículos existentes para esta búsqueda.</Text>
                        :
                        <Box height="auto" display="flex" flexDirection="column" alignItems="center">
                            {

                                isLoading
                                    ? <Spinner size='xl' thickness='4px' speed='1s' />
                                    :
                                    <>
                                        <Text fontWeight="semibold" w={{ base: "22rem", md: "44.5rem" }} m="20px auto 24px">
                                            {
                                                query === "" ? `Destacados en la sección de ${obj.name}` : `Productos relacionados con "${query}"`
                                            }
                                        </Text>
                                        <VStack spacing={4} mb="2rem" w="fit-content">
                                            <ProductCard />
                                        </VStack>
                                        <HStack spacing="1rem" w="fit-content" mb="1rem">
                                            <IconButton icon={<NavArrowLeft />} onClick={handlePrevPage} />
                                            <Square size='40px'>{page}</Square>
                                            <IconButton icon={<NavArrowRight />} onClick={handleNextPage} />
                                        </HStack>
                                    </>
                            }
                        </Box>
                }
            </Box>
            <Footer />
        </VStack>
    )
}
