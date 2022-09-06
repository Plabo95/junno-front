import React from "react";
import { Flex, Input, Button, Link, Text, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

//components
import RecoverModal from "./RecoverModal";

export default function LoginForm(){

    const { isOpen, onOpen, onClose } = useDisclosure()
    let navigate = useNavigate();

    return(
        <>
        <RecoverModal isOpen={isOpen} onClose={onClose} />

        <Flex direction='column' rounded='xl' p='4em' w='45%' align='center' bg='whiteAlpha.700'>
            <Text fontSize='32px' fontWeight='600' mb='1em'>BIENVENIDO</Text>
            <Input mb='1em' placeholder='Usuario' />
            <Input mb='1em' placeholder='Contraseña' type='password' />
            <Button cursor='pointer' onClick={()=>navigate('/')} my='1em' colorScheme='green' w='100%'>
                 Login 
            </Button>

            <Flex mt='2em' align='start' direction='column' gap='2' w='100%'>
                <Link onClick={onOpen} color='gray.500' textDecor='underline' >¿No recuerdas tu contraseña?</Link>
                <Link color='gray.500' textDecor='underline' onClick={()=>navigate('/register')} >Registrarse</Link>
            </Flex>
            
        </Flex>
        </>
    )
}
