import React from "react";
import { Flex, Image, Text,} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

//components
import RegisterFormF from "../components/LoginRegister/RegisterFormF";

//image
import bg from "../img/bg.jpg"
import logo from "../img/logo.png"

export default function Register(){

    const navigate = useNavigate()

    return(
        <Flex minH='100vh' w='100%'  bgRepeat='no-repeat' bgSize='cover' bgImage={bg}>
            <Flex minH='100vh' w='100%' 
            bgGradient='radial-gradient(97.7% 193.29% at 100% 50%, rgba(0, 94, 42, 0.75) 0%, rgba(0, 94, 42, 0.75) 23.03%, rgba(28, 93, 159, 0.75) 56.03%, rgba(4, 52, 135, 0.75) 96.35%)'>  
                <Flex w='50%' gap='2em' direction='column' justify='center' align='center' cursor='pointer' onClick={()=>navigate('/')}>
                    <Image maxW='40%' src={logo} />
                    <Text fontWeight='bold' color='#A8F200' >La energía mas rápida</Text>
                </Flex>
                <Flex w='50%' justify='center' align='center'>
                    <RegisterFormF/>
                </Flex>
            </Flex>
        </Flex>
    )
}