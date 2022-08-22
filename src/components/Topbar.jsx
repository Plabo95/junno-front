import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";

//logos
import bell from "../img/topbar/bell.png"
import logout from "../img/topbar/logout.png"
import profile from "../img/topbar/profile.png"
import telf from "../img/topbar/telf.png"

export default function Topbar(){


    return(

        <Flex w='100%' h='10vh' bg='#005E2A' align='center' justify='space-between' px='5em'>
            JUNNO
            <Flex gap='3em' align='center'>
                <Flex align='center' gap='1em'>
                    <Image src={telf}  />
                    <Text color='white' >Contacta</Text>
                </Flex>
                <Image src={bell}  />
                <Image src={profile}  />
                <Image src={logout}  />
            </Flex>
        </Flex>

    )
}