import React from "react";
import { Flex, Text, Input, Button } from "@chakra-ui/react";

//components
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function Visor(){

    return(

        <Flex direction='column'>
            <Topbar/>
            <Flex>
                <Sidebar/>
                <Flex w='100%'  pt='2em' direction='column' >
                    <Text  px='5%' fontWeight='500' fontSize='32px' color='green'>Introduce la Referencia Catastral</Text>
                    <Flex direction='column' w='50%' px='5%' mt='2em' gap='1em' >
                        <Text fontSize='20px' fontWeight='400' >Referencia Catastral</Text>
                        <Input bg='gray.200' />
                        <Text fontSize='20px' fontWeight='400' >Localidad</Text>
                        <Input bg='gray.200' />
                        <Text fontSize='20px' fontWeight='400' >Municipio</Text>
                        <Input bg='gray.200' />
                        <Button colorScheme='green' w='30%' mt='2em' > Buscar </Button>
                    </Flex>
                </Flex>
            </Flex>

        </Flex>

    )
}