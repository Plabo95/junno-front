import React from "react";
import { Table } from "react-chakra-pagination";
import { Flex, Text } from "@chakra-ui/react";

const users = [

  ]

export default function ConsultaExpedienteTable({setState}){
    const [page, setPage] = React.useState(1);

    // Formatter for each user
    const tableData = users.map((user) => ({
      name: user.name,
      email: user.email,
      phone: user.phone,
      state:user.state,
      opening:user.opening,
      closing:user.closing,
    }));
    
    const tableColumns = [
        {
          Header: "Nº Expediente",
          accessor: "name" 
        },
        {
          Header: "Título",
          accessor: "email"
        },
        {
          Header: "Tipo de relación",
          accessor: "phone"
        },
        {
            Header: "Estado",
            accessor: "state"
          },
        {
            Header: "Apertura",
            accessor: "opening"
          },
          {
            Header: "Cierre",
            accessor: "closing"
          }
      ];


    return(
        <Flex w='60%' direction='column'>
            <Text pt='2em' px='5%' fontWeight='500' fontSize='32px' color='green'>Consulta de expediente</Text>
            <Table
            colorScheme="green"
            // Fallback component when list is empty
            emptyData={{
            text: "No hay registros"
            }}
            totalRegisters={users.length}
            page={page}
            // Listen change page event and control the current page using state
            onPageChange={(page) => setPage(page)}
            columns={tableColumns}
            data={tableData}
            />
        </Flex>
    )
}