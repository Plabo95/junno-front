import React from "react";
import { Flex, Input, Button, Text } from "@chakra-ui/react";


export default function RegisterFormJ(){


    return(
        <Flex direction='column' rounded='xl' p='3em' align='center' bg='whiteAlpha.700'>
            <Text fontSize='32px' fontWeight='600' mb='1em'>REGÍSTRATE</Text>
            
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
            
            <Button my='1em' colorScheme='green' w='100%'>
                 Registrarse 
            </Button>
            <Text>Los campos con * son obligatorios</Text>
        </Flex>
    )
}
