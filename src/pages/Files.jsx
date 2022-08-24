import React from "react";
import { Flex, Text, Link, Image } from "@chakra-ui/react";

//components
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

//image
import upload from '../img/upload.png'

export default function Files(){

    return(

        <Flex direction='column'>
            <Topbar/>
            <Flex>
                <Sidebar/>
                <Flex w='100%' align='center' direction='column' pt='2em' gap='2em'>
                    {/* Title */}
                    <Flex align='center' justify='space-between' w='80%'>
                        <Text fontWeight='500' fontSize='32px' color='green'>Archivos</Text>
                        <Flex align='center' gap='1em'>
                            <Link fontSize='16px' fontWeight='bold' textDecor='underline' color='green'> Subir archivo</Link>
                            <Image src={upload}/>
                        </Flex>              
                    </Flex>

                    <Text w='80%'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque 
                            tristique massa pellentesque et risus nulla in in. Porttitor sociis dolor, 
                            nulla quam cursus pulvinar mauris, laoreet tincidunt.
                    </Text>

                </Flex>
            </Flex>
        </Flex>

    )
}