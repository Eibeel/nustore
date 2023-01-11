import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"


export const ItemTableInformation = () => {
    return (
        <TableContainer>
            <Table
                variant='simple'
                size={{ base: "md" }}
                w={{ base: "22rem", md: "44.5rem" }}
            >
                <Thead>
                    <Tr>
                        <Th>Atributo</Th>
                        <Th>Detalle</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Marca</Td>
                        <Td>AMD</Td>
                    </Tr>
                    <Tr>
                        <Td>Generacion</Td>
                        <Td>AMD RYZEN 3</Td>
                    </Tr>
                    <Tr>
                        <Td>Nucleos</Td>
                        <Td>6</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    )
}
