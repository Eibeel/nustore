import React from 'react'
import { Card, CardBody, Image, Stack, Text } from "@chakra-ui/react";

export const ProductCard = () => {

    return (
            <Card
                align="center"
                borderRadius="none"
                direction="row"
                h="auto"
                p="12px"
                variant="outline"
                w={['22rem', 'md', '44.5rem']}
                cursor="pointer"
            >
                <Image
                    src="https://placeimg.com/104/96/any/grayscale"
                    border=".5px solid #EDEDED"
                    borderRadius="4px"
                    w="104px"
                    h="96px"
                />

                <CardBody padding="0">
                    <Stack spacing="12px" paddingLeft="12px">
                        <Text fontWeight="light" fontSize="14px">
                            Audífonos inalámbricos Sony WH-CH510 negro
                        </Text>
                        <Text fontWeight="semibold">$ 999.999 COP</Text>
                    </Stack>
                </CardBody>
            </Card>
    )
}
