import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, HStack, IconButton, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { MenuScale } from 'iconoir-react';

export const DrawerLeft = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <IconButton
                aria-label="Categorias"
                colorScheme="brand.30"
                icon={<MenuScale />}
                onClick={onOpen}
                variant="ghost"
            />

            <Drawer placement='left' onClose={onClose} isOpen={isOpen} size={[ 'xs', 'sm' ]}>
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
                    <DrawerFooter justifyContent="center" borderTopWidth="1px">
                        <HStack spacing="2rem">
                            <Button as={Link} to="/auth/login">Iniciar sesión</Button>
                            <Button as={Link} to="/auth/register">Registrarse</Button>
                            {/* 
                            
                            [+] validar autenticacion para mostrar componente
                            
                            <Text fontWeight="bold" fontSize="20px">Abel Guardo</Text>
                            <LogOut cursor="pointer" color='#E54335'/> 
                            
                            */}
                        </HStack>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
