import React from "react"
import { Flex, Text, Button } from "@chakra-ui/react"

export default function SearcherData ({setView}) {

    return(
        <Flex w='100%' direction='column' gap='2em' pt='2em' px='4em' mb='5vh'>
            {/* Bloque de info 1*/}
            <Flex direction='column' w='40%' >
                <Text fontWeight='500' fontSize='32px' color='green' mb='1em'>Datos descriptivos del inmueble</Text>
                <Flex justify='space-between' pr='4em'>
                    <Text fontWeight='500' fontSize='16px'>Referencia Catastral:</Text>
                    <Text>Lorem impsum</Text>
                </Flex>
                <Flex justify='space-between' pr='4em'>
                    <Text fontWeight='500' fontSize='16px'>Localización:</Text>
                    <Text>Lorem impsum</Text>
                </Flex>
                <Flex justify='space-between' pr='4em'>
                    <Text fontWeight='500' fontSize='16px'>Clase:</Text>
                    <Text>Lorem impsum</Text>
                </Flex>
                <Flex justify='space-between' pr='4em'>
                    <Text fontWeight='500' fontSize='16px'>Uso principal:</Text>
                    <Text>Lorem impsum</Text>
                </Flex>
            </Flex>
            <hr />
            {/* Bloque de info 2*/}
            <Flex direction='column' w='40%' >
                <Text fontWeight='500' fontSize='32px' color='green' mb='1em'>Parcela Catastral</Text>
                <Flex justify='space-between' pr='4em'>
                    <Text fontWeight='500' fontSize='16px'>Localización:</Text>
                    <Text>Lorem impsum</Text>
                </Flex>
                <Flex justify='space-between' pr='4em'>
                    <Text fontWeight='500' fontSize='16px'>Superficie Gráfica:</Text>
                    <Text>Lorem impsum</Text>
                </Flex>
            </Flex>
            <hr />
            {/* Bloque de info 2*/}
            <Flex direction='column' w='40%' >
                <Text fontWeight='500' fontSize='32px' color='green' mb='1em'>Cultivo</Text>
                <Flex justify='space-between' pr='4em'>
                    <Text fontWeight='500' fontSize='16px'>Clase:</Text>
                    <Text>Lorem impsum</Text>
                </Flex>
                <Flex justify='space-between' pr='4em'>
                    <Text fontWeight='500' fontSize='16px'>Uso principal:</Text>
                    <Text>Lorem impsum</Text>
                </Flex>
            </Flex>
            <Button colorScheme='green' variant='outline' w='20%' mt='2em' onClick={()=>setView('carto')}> Cartografía</Button>
        </Flex>
    )
}