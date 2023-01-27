import { Box, HStack, IconButton, Image, Square, Text, VStack } from "@chakra-ui/react"
import { NavArrowLeft, NavArrowRight } from "iconoir-react"
import { useDispatch, useSelector } from "react-redux"
import { setItems } from "../../store/nustore"
import { Footer, NavBar, ProductCard } from "../components"
import notFound from '../../assets/images/void.svg'

export const SelectedCategoryPage = () => {

    const dispatch = useDispatch();
    const { page, category_id, categories, products, query } = useSelector(state => state.nustore);

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
                    products.length === 0
                        ?
                        <Image src={notFound} h="264px" w="264px" filter="grayscale(1)" />
                        :
                        <Box height="auto" display="flex" flexDirection="column" alignItems="center">
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
                        </Box>
                }
            </Box>
            <Footer />
        </VStack>
    )
}