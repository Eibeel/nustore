import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, HStack, IconButton, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { MenuScale } from 'iconoir-react';
import React from 'react'

export const DrawerLeft = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <IconButton
                icon={<MenuScale />}
                colorScheme="brand.30"
                onClick={onOpen}
                aria-label="Categorias"
                variant="ghost"
            />

            <Drawer placement='left' onClose={onClose} isOpen={isOpen} size="xs">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth="1px" fontSize="24px" fontWeight="bold">Explorar</DrawerHeader>
                    <DrawerBody>
                        <VStack spacing="14px" pt="8px">
                            <Text fontSize="18px" fontWeight="semibold" w="100%">Hola</Text>
                            <Text fontSize="18px" fontWeight="semibold" w="100%">Mundo</Text>
                            <Text fontSize="18px" fontWeight="semibold" w="100%">MrEibel</Text>
                        </VStack>
                    </DrawerBody>
                    <DrawerFooter justifyContent="center">
                        <HStack spacing="2rem">
                            <Button>Iniciar sesión</Button>
                            <Button>Registrarse</Button>
                        </HStack>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
