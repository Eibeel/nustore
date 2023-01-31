import React from 'react'
import { Card, CardBody, Image, Spinner, Stack, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../../store/nustore/thunks';

export const ProductCard = () => {

    const { isLoading, products, category_id } = useSelector(state => state.nustore);
    const options = { style: 'currency', currency: 'COP' };
    const dispatch = useDispatch();

    return (
        <>
            {
                isLoading
                    ? <Spinner size='lg' thickness='4px' speed='1s' m="2rem" />
                    : products.map(product => (
                        <Card
                            align="center"
                            borderRadius="none"
                            direction="row"
                            h="auto"
                            p="12px"
                            variant="outline"
                            w={['22rem', 'md', '44.5rem']}
                            cursor="pointer"
                            as={Link}
                            to={`/c/${category_id}/p/${product.title}`}
                            key={product.id}
                            _hover={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px;" }}
                            onClick={() => dispatch(setProduct(product.id))}
                        >
                            <Image
                                src={product.thumbnail}
                                border=".5px solid #EDEDED"
                                borderRadius="4px"
                                w="104px"
                                h="96px"
                            />
                            <CardBody padding="0">
                                <Stack spacing="12px" paddingLeft="20px">
                                    <Text id="text_title" fontWeight="light" fontSize="14px">
                                        {product.title}
                                    </Text>
                                    <Text fontWeight="semibold">
                                        {new Intl.NumberFormat('es-CO', options).format(product.price)} {product.currency_id}
                                    </Text>
                                </Stack>
                            </CardBody>
                        </Card>
                    ))
            }
        </>
    )
}
