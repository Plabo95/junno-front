import React from "react";
import { Flex, Link } from "@chakra-ui/react";

export default function Sidebar(){

    return(

        <Flex direction='column' bg='#005E2A' w='15%' align='center' gap='1em' minH='90vh' py='2em'>
            <Link fontSize='20px' color='white' > Buscador de inmuebles</Link>
            <Link fontSize='20px' color='white' > Archivos </Link>
            <Link fontSize='20px' color='white' > Listado de fincas </Link>
            <Link fontSize='20px' color='white' > Visor ambiental </Link>
            <Link fontSize='20px' color='white' > Documentos </Link>
        </Flex>

    )
}
