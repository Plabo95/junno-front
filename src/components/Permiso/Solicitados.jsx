import React from "react";
import { Table } from "react-chakra-pagination";
import { Flex, Image, Link } from "@chakra-ui/react";

//image
import trash from '../../img/documentos/trash.png'

const users = [
    {
      id: 1,
      name: "Finca 1",
      email: "738635210928637HBJ",
      phone: "635g293739292",
    },
    {
      id: 2,
      name: "Finca 2",
      email: "738635210928637HBJ",
      phone: "635g293739292",
    },
    {
      id: 2,
      name: "Finca 3",
      email: "738635210928637HBJ",
      phone: "635g293739292",
    },
  ]

export default function Solicitados({setState}){
    const [page, setPage] = React.useState(1);

    // Formatter for each user
    const tableData = users.map((user) => ({
      name: user.name,
      email: user.email,
      phone: user.phone,
      action:(
        <Flex gap='2em'>
          <Link onClick={()=>setState('finca')} >Ver</Link>
          <Image src={trash}/>
        </Flex>
      ),      
    }));
    
    const tableColumns = [
        {
          Header: "Nº Finca",
          accessor: "name" 
        },
        {
          Header: "NºRegistro",
          accessor: "email"
        },
        {
          Header: "NºExpediente",
          accessor: "phone"
        },
        {
          Header: "",
          accessor: "action"
        }
      ];


    return(
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

    )
}