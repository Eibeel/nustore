import React from "react";
import { Box, Link, SimpleGrid } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategory, setItems } from "../../store/nustore/thunks";

export const GridCategories = () => {

    const dispatch = useDispatch();

    return (
        <Box w={{ base: "22rem", md: "md", lg: "44.5rem" }}>
            <SimpleGrid columns={2} spacing="1rem">
                <Link
                    as={ReactLink}
                    to="/c/MCO1000"
                    w="auto"
                    h="48px"
                    border="solid 1px #EDEDED"
                    fontSize="13px"
                    p="1rem"
                    textAlign="center"
                    onClick={() => {
                        dispatch(setCategory());
                        setTimeout(() => {
                            dispatch(setItems(null, "MCO1000"))
                        }, 800)
                    }}
                >
                    Audio
                </Link>
                <Link
                    as={ReactLink}
                    to="/c/MCO1648"
                    w="auto"
                    h="48px"
                    border="solid 1px #EDEDED"
                    fontSize="13px"
                    p="1rem"
                    textAlign="center"
                    onClick={() => {
                        dispatch(setCategory());
                        setTimeout(() => {
                            dispatch(setItems(null, "MCO1648"))
                        }, 800)
                    }}
                >
                    Portatil
                </Link>
                <Link
                    as={ReactLink}
                    to="/c/MCO1051"
                    w="auto"
                    h="48px"
                    border="solid 1px #EDEDED"
                    fontSize="13px"
                    p="1rem"
                    textAlign="center"
                    onClick={() => {
                        dispatch(setCategory());
                        setTimeout(() => {
                            dispatch(setItems(null, "MCO1051"))
                        }, 800)
                    }}
                >
                    Celulares
                </Link>
                <Link
                    as={ReactLink}
                    to="/c/MCO1430"
                    w="auto"
                    h="48px"
                    border="solid 1px #EDEDED"
                    fontSize="13px"
                    p="1rem"
                    textAlign="center"
                    onClick={() => {
                        dispatch(setCategory());
                        setTimeout(() => {
                            dispatch(setItems(null, "MCO1430"))
                        }, 800)
                    }}
                >
                    Ropa
                </Link>
            </SimpleGrid>
        </Box>
    );
};
