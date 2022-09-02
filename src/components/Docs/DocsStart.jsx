import React from "react";
import { Flex, Text, Button, Tabs, Tab, TabList, TabPanels, TabPanel } from "@chakra-ui/react";

//components
import Pendientes from "./Pendientes";
import Solicitados from "./Solicitados";

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

            <Tabs rounded='xl' mt='1em' isFitted variant='enclosed' size='md' w='100%' colorScheme={'green'} >
                        <TabList  borderColor='green'>
                            <Tab>Pendientes</Tab>
                            <Tab>Solicitados</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Pendientes/>
                            </TabPanel>
                            <TabPanel>
                                <Solicitados setState={setState} />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>   
            </Flex>  
        </Flex>
    )
}