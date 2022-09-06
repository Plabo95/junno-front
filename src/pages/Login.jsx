import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

//components
import LoginForm from "../components/LoginRegister/LoginForm";

//image
import bg from "../img/bg.jpg"

export default function Login(){

    const navigate = useNavigate()

    return(
        <Flex minH='100vh' w='100%'  bgRepeat='no-repeat' bgSize='cover' bgImage={bg}>
            <Flex minH='100vh' w='100%' 
            bgGradient='radial-gradient(97.7% 193.29% at 100% 50%, rgba(0, 94, 42, 0.75) 0%, rgba(0, 94, 42, 0.75) 23.03%, rgba(28, 93, 159, 0.75) 56.03%, rgba(4, 52, 135, 0.75) 96.35%)'>      
                <Flex w='50%' direction='column' justify='center' align='center' cursor='pointer' onClick={()=>navigate('/')}>
                    <Heading>JUNNO</Heading>
                    <Text>La energía mas rápida</Text>
                </Flex>
                <Flex w='50%' justify='center' align='center'>
                    <LoginForm/>
                </Flex>
            </Flex>
        </Flex>
    )
}