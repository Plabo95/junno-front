import React from "react";
import { Flex, Text, Button, Tabs, Tab, TabList, TabPanels, TabPanel } from "@chakra-ui/react";

//components
import Pendientes from "../Docs/Pendientes";
import Solicitados from "../Docs/Solicitados";

export default function Start({setState}){

    return(
        <Flex w='100%'  pt='2em' direction='column' gap='2em'>
            <Text  px='5%' fontWeight='500' fontSize='32px' color='green'>Conexión Compañías Eléctricas</Text>
            <Text px='5%' fontWeight='500' fontSize='16px'>
                Inicie el registro y expediente de fincas, durante el proceso necesitaremos 
                que aporte algunos datos para poder seguir con este tramite.
            </Text>
            <Flex>
                <Button ml='5%'  colorScheme='green' w='15%' onClick={()=>setState('progress')} > Proceso automático</Button>
                <Button ml='5%' variant='outline' colorScheme='green' w='15%' onClick={()=>setState('ref')} > Proceso manual</Button>
            </Flex>
            
        
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