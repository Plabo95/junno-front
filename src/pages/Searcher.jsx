import React from "react";
import { Flex, Text, Link, Image } from "@chakra-ui/react";

//components
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

//image
import upload from '../img/upload.png'

export default function Searcher(){

    return(

        <Flex direction='column'>
            <Topbar/>
            <Flex>
                <Sidebar/>
                <Flex w='100%' direction='column' align='center'>
                    <Flex align='center' justify='space-between' pt='4em' w='80%'>
                        <Text fontWeight='500' fontSize='32px' color='green'>Introduce los datos</Text>
                        <Flex align='center' gap='1em'>
                            <Link fontSize='16px' fontWeight='bold' textDecor='underline' color='green'> Subir archivo</Link>
                            <Image src={upload}/>
                        </Flex>              
                    </Flex>


                </Flex>
            </Flex>

        </Flex>

    )
}