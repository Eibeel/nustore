import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, HStack, IconButton, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { LogOut, MenuScale } from 'iconoir-react';
import { useCheckAuth } from '../../hooks/useCheckAuth';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../store/auth';

export const DrawerLeft = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { displayName } = useSelector(state => state.auth)
    const status = useCheckAuth();
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(startLogout())
    }

    return (
        <>
            <IconButton
                aria-label="Categorias"
                colorScheme="brand.30"
                icon={<MenuScale />}
                onClick={onOpen}
                variant="ghost"
            />

            <Drawer placement='left' onClose={onClose} isOpen={isOpen} size={['xs', 'sm']}>
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
                        {
                            (status === 'authenticated')
                                ? (
                                    <HStack spacing="2rem">
                                        <Text fontWeight="bold" fontSize="20px">Abel Guardo</Text>
                                        <LogOut onClick={onLogout} as={Link} to="/home" cursor="pointer" color='#E54335' />
                                    </HStack>
                                )
                                : (
                                    <HStack spacing="2rem">
                                        <Button as={Link} to="/login">Iniciar sesión</Button>
                                        <Button as={Link} to="/register">Registrarse</Button>
                                    </HStack>
                                )
                        }
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
