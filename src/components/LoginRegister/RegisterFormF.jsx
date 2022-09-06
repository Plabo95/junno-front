import React from "react";
import { Flex, Input, Button, Text, Tabs, Tab, TabList, TabPanels, TabPanel, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

//components


export default function RegisterFormF(){

    const navigate = useNavigate()

    return(
        <Flex direction='column' rounded='xl' p='3em' align='center' bg='whiteAlpha.700'>
            <Text fontSize='32px' fontWeight='600' mb='1em'>REGÍSTRATE</Text>
            
            <Tabs rounded='xl' isFitted variant='enclosed' colorScheme={'green'}>
                <TabList mb='1em' borderColor='green'>
                    <Tab>Entidades físicas</Tab>
                    <Tab>Entidades jurídicas</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Flex mb='1em' gap='3em'>
                            <Flex direction='column' gap='1' w='50%'>
                                <Text fontWeight='bold' ml='1em' color='green'>Nombre*</Text>
                                <Input bg='white' placeholder='Nombre' />
                            </Flex>
                            <Flex direction='column' gap='1' w='50%'>
                                <Text fontWeight='bold' ml='1em' color='green'>Apellidos*</Text>
                                <Input bg='white' placeholder='Apellidos' />
                            </Flex>
                        </Flex>

                        <Flex mb='1em' gap='3em'>
                            <Flex direction='column' gap='1' w='50%'>
                                <Text fontWeight='bold' ml='1em' color='green'>Email*</Text>
                                <Input bg='white' placeholder='Email' />
                            </Flex>
                            <Flex direction='column' gap='1' w='50%'>
                                <Text fontWeight='bold' ml='1em' color='green'>Contraseña*</Text>
                                <Input bg='white' type='password' placeholder='Contraseña' />
                            </Flex>
                        </Flex>

                        <Flex mb='1em' gap='3em'>
                            <Flex direction='column' gap='1' w='50%'>
                                <Text fontWeight='bold' ml='1em' color='green'>Teléfono*</Text>
                                <Input bg='white' placeholder='Teléfono' />
                            </Flex>
                            <Flex direction='column' gap='1' w='50%'>
                                <Text fontWeight='bold' ml='1em' color='green'>NIF/NIE*</Text>
                                <Input bg='white'placeholder='NIF/NIE' />
                            </Flex>
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex mb='1em' gap='3em'>
                            <Flex direction='column' gap='1' w='50%'>
                                <Text fontWeight='bold' ml='1em' color='green'>Nombre*</Text>
                                <Input bg='white' placeholder='Nombre' />
                            </Flex>
                            <Flex direction='column' gap='1' w='50%'>
                                <Text fontWeight='bold' ml='1em' color='green'>Apellidos*</Text>
                                <Input bg='white' placeholder='Apellidos' />
                            </Flex>
                        </Flex>

                        <Flex mb='1em' gap='3em'>
                            <Flex direction='column' gap='1' w='50%'>
                                <Text fontWeight='bold' ml='1em' color='green'>Email*</Text>
                                <Input bg='white' placeholder='Email' />
                            </Flex>
                            <Flex direction='column' gap='1' w='50%'>
                                <Text fontWeight='bold' ml='1em' color='green'>Contraseña*</Text>
                                <Input bg='white' type='password' placeholder='Contraseña' />
                            </Flex>
                        </Flex>

                        <Flex mb='1em' gap='3em'>
                            <Flex direction='column' gap='1' w='50%'>
                                <Text fontWeight='bold' ml='1em' color='green'>Teléfono*</Text>
                                <Input bg='white' placeholder='Teléfono' />
                            </Flex>
                            <Flex direction='column' gap='1' w='50%'>
                                <Text fontWeight='bold' ml='1em' color='green'>CIF</Text>
                                <Input bg='white'placeholder='CIF' />
                            </Flex>
                        </Flex>
                    </TabPanel>
                </TabPanels>
            </Tabs>


            
            <Button my='1em' colorScheme='green' w='100%'>
                 Registrarse 
            </Button>
            <Text>Los campos con * son obligatorios</Text>
            <Flex gap='1'>
                <Text>¿Ya tienes cuenta? Haz</Text>
                <Link fontWeight='bold' color='green' onClick={()=>navigate('/login')} >Login</Link>
            </Flex>
        </Flex>
    )
}
