import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { useSelector } from "react-redux";


export const ItemTableInformation = () => {

    const { product_id, products } = useSelector(state => state.nustore);

    let productInfo = {};

    products.map(pinfo => {
        if (pinfo.id === product_id) {
            const { attributes } = pinfo;
            productInfo = attributes
            return productInfo
        }
        return productInfo
    })

    return (
        <TableContainer>
            <Table
                variant='simple'
                size={{ base: "md" }}
                fontSize={{ base: "13px", md: "16px" }}
                w={{ base: "22rem", md: "44.5rem" }}
            >
                <Thead>
                    <Tr>
                        <Th>Atributo</Th>
                        <Th>Detalle</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        productInfo.map(details => (
                            <Tr key={details.value_id}>
                                <Td>{details.name}</Td>
                                <Td>{details.value_name}</Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
        </TableContainer>
    )
}
