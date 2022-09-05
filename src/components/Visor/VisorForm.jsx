import React, {useState} from "react";
import { Flex, Text, Input, Button } from "@chakra-ui/react";

export default function VisorForm({setState}) {
    
    const [provincia, setProvincia] = useState('')

    const buscar = () =>{
        if(provincia.toUpperCase() === 'CASTILLA'){
            setState('mapcastilla')
        }
        if(provincia.toUpperCase() === 'ARAGON'){
            setState('maparagon')
        }
    }

    return(
        <Flex w='100%'  pt='2em' direction='column' >
            <Text  px='5%' fontWeight='500' fontSize='32px' color='green'>Introduce la Referencia Catastral</Text>
            <Flex direction='column' w='50%' px='5%' mt='2em' gap='1em' >
                <Text fontSize='20px' fontWeight='400' >Referencia Catastral</Text>
                <Input bg='gray.200' />
                <Text fontSize='20px' fontWeight='400' >Localidad *(Introduce Aragon / Castilla)</Text>
                <Input bg='gray.200' onChange={(e)=>setProvincia(e.target.value)} />
                <Text fontSize='20px' fontWeight='400' >Municipio</Text>
                <Input bg='gray.200' />
                <Button colorScheme='green' w='30%' mt='2em' onClick={buscar} > Buscar </Button>
            </Flex>
        </Flex>
    )
}