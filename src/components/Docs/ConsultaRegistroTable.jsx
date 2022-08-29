import React from "react";
import { Table } from "react-chakra-pagination";
import { Flex, Link, Image, Text } from "@chakra-ui/react";

const users = [
    {
      id: 1,
      name: "2002-Er191B",
      email: "Solicitud de certificado urbanístico SIA 15789",
      phone: "Telemática",
      datetime:'08/06/2022 15:43'
    },
  ]

export default function ConsultaRegistroTable({setState}){
    const [page, setPage] = React.useState(1);

    // Formatter for each user
    const tableData = users.map((user) => ({
      name: user.name,
      email: user.email,
      phone: user.phone,
      datetime:user.datetime,
      action:(
        <Flex gap='2em'>
            <Link color='green' fontWeight='bold' onClick={()=>setState('finca')} >Descargar</Link>
            <Link color='green' fontWeight='bold' onClick={()=>setState('finca')} >Ver</Link>
        </Flex>
      )      
    }));
    
    const tableColumns = [
        {
          Header: "Número",
          accessor: "name" 
        },
        {
          Header: "Resumen",
          accessor: "email"
        },
        {
          Header: "Forma de presentación",
          accessor: "phone"
        },
        {
          Header: "Fecha y Hora",
          accessor: "datetime"
        },
        {
            Header: "",
            accessor: "action"
          }
      ];


    return(
        <Flex w='60%' direction='column'>
            <Text px='5%' pt='2em' fontWeight='500' fontSize='32px' color='green'>Consulta de registro</Text>
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