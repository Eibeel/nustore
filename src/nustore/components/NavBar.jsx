import React from "react";
import { Link as LinkReact } from "react-router-dom";
import { Flex, Heading, IconButton, Input } from "@chakra-ui/react";
import { LogOut, User } from "iconoir-react";
import { DrawerLeft } from "./";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/auth";

export const NavBar = () => {

    const { status } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogout())
    }

    return (
        <div>
            <Flex
                bg="brand.30"
                w="100vw"
                h="132px"
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
                    <Input
                        bg="#0E1116"
                        border="none"
                        focusBorderColor="brand.30"
                        fontSize="15px"
                        placeholder="Buscar articulos"
                        variant="outline"
                        w={{ base: "16.5rem", md: "md", lg: "40em" }}
                    />
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
