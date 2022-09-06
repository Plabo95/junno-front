import React, {useState} from "react";
import { Flex, Input, Button, Text, Tabs, Tab, TabList, TabPanels, TabPanel, Link, Image } from "@chakra-ui/react";
import { FilePicker } from 'react-file-picker'

//image
import upload from '../../img/upload.png'

export default function SearcherForm({setView}) {

    const [ref, setRef] = useState('')


    const carto = () =>{
        if(ref.toUpperCase()==='22153A004001320000UK'){
            setView('cartogreen')
        }
        if(ref.toUpperCase()==='22153A004000860000UB'){
            setView('cartored')
        }
    }

    return(
        <Flex w='100%' direction='column' align='center' gap='4em' pt='2em'>
            <Flex align='center' justify='space-between' w='100%' px='5%'>
                <Text fontWeight='500' fontSize='32px' color='green'>Introduce los datos</Text>
                <FilePicker
                    extensions={['md']}
                >
                <Flex align='center' gap='1em'>
                    <Link fontSize='16px' fontWeight='bold' textDecor='underline' color='green'> Subir archivo</Link>
                    <Image src={upload}/>
                </Flex>
                </FilePicker>              
            </Flex>
            <Flex direction='column' boxShadow='lg' rounded='xl' w='100%' px='5%' align='center' bg='whiteAlpha.700' > 
                    <Tabs rounded='xl' isFitted variant='enclosed' size='lg' w='100%' colorScheme={'green'} >
                        <TabList mb='1em' borderColor='green'>
                            <Tab>Referencia Catastral</Tab>
                            <Tab>Polígono/Parcela</Tab>
                        </TabList>
                        <TabPanels p='2em'>
                            <TabPanel>
                                <Flex direction='column' justify='space-evenly' minH='20vh' >
                                    <Flex mb='1em' gap='4em' >
                                        <Text w='50%' fontWeight='bold' color='green'>*Referencia Ctastral</Text>
                                        <Input  bg='gray.200' placeholder='22153A004001320000UK' onChange={(e)=>setRef(e.target.value)} />
                                    </Flex>
                                    <Flex pt='2em' justify='space-evenly'>
                                        <Button colorScheme={'green'} variant='outline' w='25%' onClick={()=>setView('data')}> Datos </Button>
                                        <Button colorScheme={'green'} variant='outline' w='25%' onClick={carto}> Cartografía </Button>
                                    </Flex>
                                </Flex>
                            </TabPanel>
                            <TabPanel>
                                <Flex direction='column' justify='space-evenly' minH='20vh' >
                                    <Flex mb='1em' gap='4em' >
                                        <Text  fontWeight='bold' color='green'>Provincia</Text>
                                        <Input  bg='gray.200' placeholder='Provincia' />
                                    </Flex>
                                    <Flex mb='1em' gap='4em' >
                                        <Text  fontWeight='bold' color='green'>Municipio</Text>
                                        <Input  bg='gray.200' placeholder='Municipio' />
                                    </Flex>
                                    <Flex mb='1em' gap='4em' >
                                        <Text fontWeight='bold' color='green'>Polígono</Text>
                                        <Input  bg='gray.200' placeholder='Polígono' />
                                        <Text fontWeight='bold' color='green'>Parcela</Text>
                                        <Input  bg='gray.200' placeholder='Parcela' />
                                    </Flex>
                                    <Flex justify='space-evenly' pt='2em'>
                                        <Button colorScheme={'green'} variant='outline' w='25%' isDisabled={true}> Datos </Button>
                                        <Button colorScheme={'green'} variant='outline' w='25%' onClick={carto} > Cartografía </Button>
                                    </Flex>
                                </Flex>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                    <Text py='2em' >Los campos con * son obligatorios</Text>
                </Flex>  
            </Flex>  
    )
}