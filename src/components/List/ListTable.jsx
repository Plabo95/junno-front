import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import { Table } from "react-chakra-pagination";

//Images icons
import docs from '../../img/ListadoFincas/docs.png'
import eye from '../../img/ListadoFincas/eye.png'
import map from '../../img/ListadoFincas/map.png'
import trash from '../../img/ListadoFincas/trash.png'
import loading from '../../img/ListadoFincas/loading.png'

const users = [
    {
      id: 1,
      name: "Fonz",
      email: "738635210928637HBJ",
      phone: "Aceptado",
      birthday: "Lorem Ipsum",
      date: "04/11/2009",
      loading: true,
    },
    {
      id: 2,
      name: "Fonz",
      email: "738635210928637HBJ",
      phone: "Rechazado",
      birthday: "Lorem Ipsum",
      date: "06/08/1989",
      loading: false,
    },
    {
      id: 2,
      name: "Fonz",
      email: "738635210928637HBJ",
      phone: "ERROR",
      birthday: "Lorem Ipsum",
      date: "06/08/1989",
      loading: true,
    },
  ]

export default function ListTable(){

    const [page, setPage] = React.useState(1);

    // Formatter for each user
    const tableData = users.map((user) => ({
      name: user.name,
      email: user.email,
      phone: user.phone ==='ERROR'
        ? <Text color='red' fontWeight='bold' >ERROR</Text>
        : user.phone ,
      date: user.date,
      birthday: user.birthday,
      action: user.loading
      ?(
        <Flex gap='1em' align='center'>
            <Image src={map} />
            <Image src={loading} />
            <Image src={docs} />
            <Image src={loading} />
        </Flex>
      )
      :(
        <Flex gap='1em' align='center'>
            <Image src={map} />
            <Image src={eye} />
            <Image src={docs} />
            <Image src={trash} />
        </Flex>
        )
    }));
    
    const tableColumns = [
        {
          Header: "Término Municipal",
          accessor: "name" 
        },
        {
          Header: "Referencia Catastral",
          accessor: "email"
        },
        {
          Header: "Estado",
          accessor: "phone"
        },
        {
          Header: "Subestado",
          accessor: "birthday"
        },
        {
            Header: "Fecha",
            accessor: "date"
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