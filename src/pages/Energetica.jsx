import React from "react";
import { Flex, Button, Text} from "@chakra-ui/react";

//components
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DocsTable from "../components/Docs/DocsTable";


export default function Energetica(){

    return(
        <Flex direction='column'>
            <Topbar/>
            <Flex>
                <Sidebar/>
                <Flex w='100%'  pt='2em' direction='column' gap='2em'>
                    <Text  px='5%' fontWeight='500' fontSize='32px' color='green'>Solicitud energética</Text>
                    <Text px='5%' fontWeight='500' fontSize='16px'>
                        Inicie el registro y expediente de fincas, durante el proceso necesitaremos 
                        que aporte algunos datos para poder seguir con este tramite.
                    </Text>
                    <Button ml='5%'  colorScheme='green' w='15%' > Iniciar proceso</Button>
                    <Flex ml='2em' w='60%'>
                        <DocsTable/>
                    </Flex>  
                </Flex>
            
            </Flex>
        </Flex>

    )
}