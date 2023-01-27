import React from 'react'
import { Link } from 'react-router-dom'
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    HStack,
    IconButton,
    Text,
    useDisclosure,
    VStack
} from '@chakra-ui/react'
import { LogOut, MenuScale } from 'iconoir-react';
import { useCheckAuth } from '../../hooks/useCheckAuth';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../store/auth';
import { setCategory, setItems } from '../../store/nustore/thunks';

export const DrawerLeft = () => {

    const status = useCheckAuth();
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { categories } = useSelector(state => state.nustore);
    const { displayName } = useSelector(state => state.auth)

    const onLogout = () => {
        dispatch(startLogout())
    }

    const handleCategory = () => {
        onOpen();
        setTimeout(() => {
            dispatch(setCategory());
        }, 600)
    }

    return (
        <>
            <IconButton
                aria-label="Categorias"
                colorScheme="brand.30"
                icon={<MenuScale />}
                onClick={handleCategory}
                variant="ghost"
            />

            <Drawer placement='left' onClose={onClose} isOpen={isOpen} size={['xs', 'sm']}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth="1px" fontSize="24px" fontWeight="bold">Explorar</DrawerHeader>
                    <DrawerBody>
                        <VStack spacing="14px" py="1rem">
                            {
                                categories.map(category => (
                                    <Text
                                        key={category.id}
                                        fontSize="18px"
                                        fontWeight="semibold"
                                        w="100%"
                                        cursor="pointer"
                                        _hover={{ color: "#E54335" }}
                                        as={Link}
                                        to={`/c/${category.id}`}
                                        onClick={() => dispatch(setItems(null, category.id))}
                                    >
                                        {category.name}
                                    </Text>
                                ))
                            }
                        </VStack>
                    </DrawerBody>
                    <DrawerFooter justifyContent="center" borderTopWidth="1px">
                        {
                            (status === 'authenticated')
                                ? (
                                    <HStack spacing="2rem">
                                        <Text fontWeight="semibold" fontSize="20px">Bienvenido, {displayName}.</Text>
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
