import React from "react";
import { Flex, Text, Input, InputGroup, InputLeftElement, Image } from "@chakra-ui/react";

//components
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ListTable from "../components/List/ListTable";

//logos
import search from "../img/ListadoFincas/search.png"

export default function Searcher(){

    return(

        <Flex direction='column'>
            <Topbar/>
            <Flex>
                <Sidebar/>
                <Flex w='100%'  pt='2em' direction='column'>
                    <Flex px='5%' w='100%' justify='space-between' >
                    <Text  fontWeight='500' fontSize='32px' color='green'>Listado fincas</Text>
                    <InputGroup w='30%' >
                        <InputLeftElement
                        pointerEvents='none'
                        children={<Image src={search} />}
                        />
                        <Input type='text'  bg='gray.300' placeholder='Buscar' />
                    </InputGroup>
                    </Flex>
                    <ListTable />
                </Flex>
            </Flex>
           

        </Flex>

    )
}