import React from "react";
import { Flex, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Sidebar(){

    let navigate = useNavigate();

    return(

        <Flex direction='column' bg='#005E2A' minW='15%' align='center'  gap='1em' minH='90vh' py='2em' px='2em'>
            <Link align='center' fontSize='20px' color='white' onClick={()=>navigate('/buscador')} > Buscador de inmuebles</Link>
            <Link align='center' fontSize='20px' color='white' onClick={()=>navigate('/archivos')}> Archivos </Link>
            <Link align='center' fontSize='20px' color='white' > Listado de fincas </Link>
            <Link align='center' fontSize='20px' color='white' > Visor ambiental </Link>
            <Link align='center' fontSize='20px' color='white' > Documentos </Link>
        </Flex>

    )
}
