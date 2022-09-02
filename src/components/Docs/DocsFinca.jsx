import React from "react";
import { Flex, Text, Button, Image } from "@chakra-ui/react";
import { FilePicker } from 'react-file-picker'

import word from '../../img/documentos/word.png'

export default function DocsFinca({setState}){

    return(
        <Flex w='100%'  pt='2em'  gap='2em'>
            <Flex direction='column' px='5%' gap='1.5em'>
                <Text fontWeight='500' fontSize='32px' color='green' mb='1em'>Nombre Finca</Text>

                {/* Ficha técnica */}
                <Text fontWeight='500' fontSize='24px' textDecor='underline' color='green'>Ficha técnica</Text>
                <Text fontWeight='500' fontSize='16px'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tristique massa pellentesque et risus nulla in in. 
                Porttitor sociis dolor, nulla quam cursus pulvinar mauris, laoreet tincidunt.
                </Text>
                <Button mb='1em' variant='outline' colorScheme='green' w='15%' onClick={()=>setState('fichatecnica')} > VER</Button>

                {/* Registro y Expediente */}
                <Text fontWeight='500' fontSize='24px' textDecor='underline' color='green'>Registro y Expediente</Text>
                <Text fontWeight='500' fontSize='16px'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tristique massa pellentesque et risus nulla in in. 
                Porttitor sociis dolor, nulla quam cursus pulvinar mauris, laoreet tincidunt.
                </Text>
                <Flex gap='2em'>
                    <Button variant='outline' colorScheme='green' w='15%' onClick={()=>setState('consultaregistro')} > Registro</Button>
                    <Button mb='1em' colorScheme='green' w='15%' onClick={()=>setState('consultaexpediente')} > Consultar estado</Button>
                </Flex>
            
                {/* Mis archivos adjuntos */}
                <Text fontWeight='500' fontSize='24px' textDecor='underline' color='green'>Mis archivos adjuntos</Text>
                <Text fontWeight='500' fontSize='16px'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tristique massa pellentesque et risus nulla in in. 
                Porttitor sociis dolor, nulla quam cursus pulvinar mauris, laoreet tincidunt.
                </Text>
                <Flex direction='column' gap='1em' >
                    <Flex gap='1em' align='center'>
                        <Image src={word} />
                        <Text fontWeight='bold' >Doc.permisos.word</Text>
                    </Flex>
                    <Flex gap='1em' align='center'>
                        <Image src={word} />
                        <Text fontWeight='bold' >Doc.permisos.word</Text>
                    </Flex>
                </Flex>
                <FilePicker>
                <Button variant='outline' colorScheme='green' w='15%' > Adjuntar archivo</Button>
                </FilePicker>
            </Flex>

        
        </Flex>
    )
}