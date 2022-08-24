import React from "react";
import { Flex, Text } from "@chakra-ui/react";

//components
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ListTable from "../components/List/ListTable";

export default function Searcher(){

    return(

        <Flex direction='column'>
            <Topbar/>
            <Flex>
                <Sidebar/>
                <Flex w='100%'  pt='2em' direction='column'>
                    <Text px='5%' fontWeight='500' fontSize='32px' color='green'>Listado fincas</Text>
                    <ListTable />
                </Flex>
            </Flex>
           

        </Flex>

    )
}