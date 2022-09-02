import React from "react";
import { Flex, Text, Link, Image } from "@chakra-ui/react";
import { FilePicker } from 'react-file-picker'

//components
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

//image
import upload from '../img/upload.png'
import xcell from '../img/xcell.png'

export default function Files(){

    return(

        <Flex direction='column'>
            <Topbar/>
            <Flex>
                <Sidebar/>
                <Flex w='100%' px='5%' direction='column' pt='2em' gap='2em' border='1px'>
                    {/* Title */}
                    <Flex align='center' justify='space-between'>
                        <Text fontWeight='500' fontSize='32px' color='green'>Archivos</Text>
                        <FilePicker
                            extensions={['md']}
                        >
                        <Flex align='center' gap='1em'>
                            <Link fontSize='16px' fontWeight='bold' textDecor='underline' color='green'> Subir archivo</Link>
                            <Image src={upload}/>
                        </Flex>
                        </FilePicker>              
                    </Flex>

                    <Text w='80%'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque 
                            tristique massa pellentesque et risus nulla in in. Porttitor sociis dolor, 
                            nulla quam cursus pulvinar mauris, laoreet tincidunt.
                    </Text>

                    {/* File list */}
                    <Flex direction='column' gap='1em' alignSelf='start' w='40%'>
                        {/*Item */}
                        <Flex justify='space-between'>
                            <Flex gap='1em' align='center'>
                                <Image src={xcell} />
                                <Text> Exc.permisos.csv </Text>
                            </Flex>
                            <Text>3-05-2022</Text>
                        </Flex>
                        {/*Item */}
                        <Flex justify='space-between'>
                            <Flex gap='1em' align='center'>
                                <Image src={xcell} />
                                <Text> Exc.permisos.csv </Text>
                            </Flex>
                            <Text>12-09-2022</Text>
                        </Flex>
                        {/*Item */}
                        <Flex justify='space-between'>
                            <Flex gap='1em' align='center'>
                                <Image src={xcell} />
                                <Text> Exc.permisos.csv </Text>
                            </Flex>
                            <Text>30-12-2019</Text>
                        </Flex>
                    </Flex>

                </Flex>
            </Flex>
        </Flex>

    )
}