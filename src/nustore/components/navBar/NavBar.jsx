import React from "react";
import { Flex, Heading, IconButton, Input } from "@chakra-ui/react";
import { Cart } from "iconoir-react";
import { BannerCarousel } from "../carousel/BannerCarousel";
import { DrawerLeft } from "../drawer/DrawerLeft";

export const NavBar = () => {
    return (
        <div>
            <Flex bg="brand.30" w="100vw" h="132px" color="brand.0" padding="18px" flexDir="column" alignItems="center" rowGap="24px" overflow="hidden">
                <Heading fontSize={{ base: "26px", md: "28px" }} fontWeight="700">
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

                    <IconButton aria-label="Carrito" variant="ghost" colorScheme="brand.30" icon={<Cart />} />
                </Flex>
            </Flex>

            <section className="wrapper_banner">
                <BannerCarousel />
            </section>
        </div>
    );
};
