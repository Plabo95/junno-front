import React from "react";
import { Table } from "react-chakra-pagination";

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

export default function DocsTable(){
    const [page, setPage] = React.useState(1);

    // Formatter for each user
    const tableData = users.map((user) => ({
      name: user.name,
      email: user.email,
      phone: user.phone,      
    }));
    
    const tableColumns = [
        {
          Header: "Nº Finca",
          accessor: "name" 
        },
        {
          Header: "Referencia Catastral",
          accessor: "email"
        },
        {
          Header: "Estado",
          accessor: "phone"
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