import React from "react";
import { Flex, Text, Image, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

//logos
import bell from "../img/topbar/bell.png"
import logout from "../img/topbar/logout.png"
import profile from "../img/topbar/profile.png"
import telf from "../img/topbar/telf.png"

export default function Topbar(){

    let navigate = useNavigate();

    return(

        <Flex w='100%' h='10vh' bg='#005E2A' align='center' justify='space-between' px='5em'>
            <Text size='32px' fontSize={'bold'} onClick={()=>navigate('/')} >
            JUNNO
            </Text> 
            <Flex gap='3em' align='center'>
                <Link color='white' onClick={()=>navigate('/login')}>Login</Link>
                <Link color='white' onClick={()=>navigate('/register')}>Register</Link>
                <Flex align='center' gap='1em'>
                    <Image src={telf}  />
                    <Text color='white' >Contacta</Text>
                </Flex>
                <Image src={bell}  />
                <Image onClick={()=>navigate('/perfil')} cursor='pointer' src={profile}  />
                <Image src={logout}  />
            </Flex>
        </Flex>

    )
}