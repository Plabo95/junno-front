import React from "react";
import { Flex, Text, Button } from "@chakra-ui/react";

//components
import DocsTable from "./DocsTable";

export default function DocsStart({setState}){

    return(
        <Flex w='100%'  pt='2em' direction='column' gap='2em'>
            <Text  px='5%' fontWeight='500' fontSize='32px' color='green'>Registro y Expediente de fincas</Text>
            <Text px='5%' fontWeight='500' fontSize='16px'>
                Inicie el registro y expediente de fincas, durante el proceso necesitaremos 
                que aporte algunos datos para poder seguir con este tramite.
            </Text>
            <Button ml='5%'  colorScheme='green' w='15%' onClick={()=>setState('progress')} > Iniciar proceso</Button>
        
            <Flex ml='2em' w='60%'>
                <DocsTable/>
            </Flex>  
        </Flex>
    )
}