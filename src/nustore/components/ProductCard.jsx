import React from 'react'
import { Card, CardBody, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SkeletonCard } from './SkeletonCard';

export const ProductCard = () => {

    const { isLoading, products } = useSelector(state => state.nustore);
    const options = { style: 'currency', currency: 'COP' };

    return (
        <>
            {
                isLoading
                    ? <SkeletonCard />
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
                            to="/articulo"
                            key={product.id}
                            _hover={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px;" }}
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
                                    <Text fontWeight="light" fontSize="14px">
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
