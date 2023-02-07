import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as LinkReact } from "react-router-dom";
import { Flex, Heading, IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { LogOut, Search, User } from "iconoir-react";
import { DrawerLeft } from "./";
import { startLogout } from "../../store/auth";
import { setItems } from "../../store/nustore/thunks";

export const NavBar = () => {

    const [query, setQuery] = useState("")
    const { status } = useSelector(state => state.auth);
    const { products, product_id } = useSelector(state => state.nustore);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogout())
    }

    const onSearchChange = ({ target }) => {
        setQuery(target.value)
    }

    let obj = {}
    products.map(product => {
        if (product.id === product_id) {
            obj = { product }
            return obj
        }
        return obj
    })

    const onSearchAction = () => {
        dispatch(setItems("", "void", query));
        setTimeout(() => {
            setQuery("")
        }, 600);
    }

    return (
        <div>
            <Flex
                bg="brand.30"
                w="100vw"
                h="145px"
                color="brand.0"
                padding="18px"
                flexDir="column"
                alignItems="center"
                rowGap="24px"
                overflow="hidden"
            >
                <Heading fontSize={{ base: "26px", md: "28px" }} fontWeight="700" as={LinkReact} to="/home">
                    nustore
                </Heading>

                <Flex alignItems="center" columnGap="16px">
                    <DrawerLeft />
                    <InputGroup>
                        <InputRightElement children={<Search color="brand.30" />} cursor="pointer" onClick={onSearchAction} />
                        <Input
                            bg="#0E1116"
                            border="none"
                            focusBorderColor="brand.30"
                            fontSize="15px"
                            placeholder="Buscar"
                            variant="outline"
                            w={{ base: "16.5rem", md: "md", lg: "40em" }}
                            value={query}
                            onChange={onSearchChange}
                        />
                    </InputGroup>
                    {
                        status === "authenticated"
                            ? <IconButton
                                aria-label="Logout"
                                colorScheme="brand.30"
                                icon={<LogOut />}
                                variant="ghost"
                                onClick={onLogout}
                            />
                            : <IconButton
                                aria-label="User"
                                as={LinkReact}
                                colorScheme="brand.30"
                                icon={<User />}
                                to="/login"
                                variant="ghost"
                            />
                    }

                </Flex>
            </Flex>
        </div>
    );
};
