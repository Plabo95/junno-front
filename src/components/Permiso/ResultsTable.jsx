import React from "react";
import { Table } from "react-chakra-pagination";
import { Flex, Link, Image, Text } from "@chakra-ui/react";

//icons
import trash from '../../img/ListadoFincas/trash.png'

const users = [
    {
      id: 1,
      name: "Finca 1",
      email: "738635210928637HBJ",
      phone: "Aceptado",
    },
    {
      id: 2,
      name: "Finca 2",
      email: "738635210928637HBJ",
      phone: "Rechazado",
    },
    {
      id: 2,
      name: "Finca 3",
      email: "738635210928637HBJ",
      phone: "ERROR",
    },
  ]

export default function ResultsTable({setState}){
    const [page, setPage] = React.useState(1);

    // Formatter for each user
    const tableData = users.map((user) => ({
      name: user.name,
      email: user.email,
      phone: user.phone,
      action:(
        <Flex gap='2em'>
            <Link color='green' fontWeight='bold' onClick={()=>setState('finca')} >Ver</Link>
            <Image src={trash} />
        </Flex>
      )      
    }));
    
    const tableColumns = [
        {
          Header: "Nº Finca",
          accessor: "name" 
        },
        {
          Header: "Nº Registro",
          accessor: "email"
        },
        {
          Header: "Estado",
          accessor: "phone"
        },
        {
            Header: "",
            accessor: "action"
          }
      ];


    return(
        <Flex w='60%' direction='column'>
            <Text px='5%' pt='2em' fontWeight='500' fontSize='32px' color='green'>Listado fincas</Text>
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